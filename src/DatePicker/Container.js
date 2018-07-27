import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import immer from 'immer'
import List from '../List'
import Icon from './Icon'
import utils from './utils'
import Picker from './Picker'
import Range from './Range'
import { datepickerClass, inputClass } from '../styles'

const FadeList = List(['fade'], 'fast')

class Container extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      focus: false,
      current: this.getCurrent(),
      position: props.position,
    }

    this.bindElement = this.bindElement.bind(this)
    this.bindPicker = this.bindPicker.bind(this)
    this.handleFocus = this.handleToggle.bind(this, true)
    this.handleBlur = this.handleToggle.bind(this, false)
    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.parseDate = this.parseDate.bind(this)

    this.firstRender = false
  }

  getCurrent() {
    let current
    if (this.props.range) {
      current = (this.props.value || []).map((v) => {
        v = this.parseDate(v)
        if (utils.isInvalid(v)) v = utils.newDate()
        return v
      })
      if (current.length === 0) current = [utils.newDate(), utils.newDate()]

      if (utils.compareMonth(current[0], current[1], -1) >= 0) {
        current[1] = utils.addMonths(current[0], 1)
      }
    } else {
      current = this.parseDate(this.props.value)
    }

    return current
  }

  getFormat() {
    const { format, type } = this.props
    if (format) return format
    switch (type) {
      case 'date':
        return 'yyyy-MM-dd'
      case 'month':
        return 'yyyy-MM'
      case 'time':
        return 'HH:mm:ss'
      case 'week':
        return 'yyyy WW'
      default:
        return 'yyyy-MM-dd HH:mm:ss'
    }
  }

  bindElement(el) {
    this.element = el
  }

  bindPicker(picker) {
    this.picker = picker
  }

  parseDate(value) {
    return utils.toDateWithFormat(value, this.getFormat(), undefined)
  }

  handleToggle(focus, event) {
    if (this.props.disabled === true) return
    if (focus === this.state.focus) return
    if (focus === true && event && event.target.className.indexOf(datepickerClass('close')) >= 0) return

    if (focus === true) this.firstRender = true

    this.setState(immer((state) => {
      state.focus = focus
      if (focus === true) {
        const rect = this.element.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        const windowWidth = window.innerWidth || document.documentElement.clientWidth
        const pickerWidth = this.props.range ? 540 : 270
        if (this.props.position) {
          if (rect.bottom + 300 > windowHeight) {
            if (rect.left + pickerWidth > windowWidth) state.position = 'right-top'
            else state.position = 'left-top'
          } else if (rect.left + pickerWidth > windowWidth) state.position = 'right-bottom'
          else state.position = 'left-bottom'
        }
        state.current = this.getCurrent()
      }
    }))

    if (focus && this.picker && this.picker.resetRange) {
      this.picker.resetRange((this.props.value || []).map(this.parseDate))
    }

    if (focus) this.props.onFocus()
    else this.props.onBlur()
  }

  handleChange(date, change, blur) {
    const format = this.getFormat()

    let value
    if (this.props.range) value = date.map(v => utils.format(v, format))
    else value = utils.format(date, format)

    const callback = blur ? () => { this.element.blur() } : undefined

    if (change) this.props.onChange(value, callback)
    else this.setState({ current: date }, callback)
  }

  handleClear() {
    this.props.onChange(undefined)
    this.element.blur()
  }

  renderText(value, placeholder, key) {
    const date = this.parseDate(value)
    if (utils.isInvalid(date)) {
      return (
        <span key={key} className={classnames(inputClass('placeholder'), datepickerClass('txt'))}>
          {placeholder}
        </span>
      )
    }
    return (
      <span key={key} className={datepickerClass('txt')}>
        {utils.format(date, this.getFormat())}
      </span>
    )
  }

  renderResult() {
    const {
      disabled, range, placeholder, type,
    } = this.props

    let { value } = this.props
    if (!value && range) value = []

    const isEmpty = !value || value.length === 0
    let { clearable } = this.props
    if (disabled === true) clearable = false

    return (
      <div className={datepickerClass('result')}>
        {
          range
            ? [
              this.renderText(value[0], placeholder[0], 0),
              <span key="-">~</span>,
              this.renderText(value[1], placeholder[1], 1),
            ]
            : this.renderText(value, placeholder)
        }
        <Icon
          className={(isEmpty || !clearable) ? '' : 'indecator'}
          name={type === 'time' ? 'Clock' : 'Calendar'}
        />
        {
          !isEmpty && clearable &&
          <Icon
            name="CloseCircle"
            className="close"
            tag="a"
            onClick={this.handleClear}
          />
        }
      </div>
    )
  }

  renderPicker() {
    if (!this.firstRender) return undefined

    const {
      range, type, value, disabled,
    } = this.props
    const format = this.getFormat()
    const Component = range ? Range : Picker

    return (
      <Component
        ref={this.bindPicker}
        current={this.state.current}
        format={format}
        disabled={typeof disabled === 'function' ? disabled : undefined}
        onChange={this.handleChange}
        type={type}
        range={range}
        value={range ? (value || []).map(v => this.parseDate(v)) : this.parseDate(value)}
      />
    )
  }

  render() {
    const { range, size } = this.props
    const { focus } = this.state

    const className = datepickerClass(
      'inner',
      range && 'range',
      size && `size-${size}`,
      focus && 'focus',
      this.state.position,
    )

    return (
      <div
        className={className}
        tabIndex={-1}
        ref={this.bindElement}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        { this.renderResult() }
        <FadeList show={focus} className={datepickerClass('picker')}>
          { this.renderPicker() }
        </FadeList>
      </div>
    )
  }
}

Container.propTypes = {
  clearable: PropTypes.bool,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  format: PropTypes.string,
  placeholder: PropTypes.any,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  position: PropTypes.string,
  range: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  size: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
}

Container.defaultProps = {
  clearable: true,
  placeholder: <span>&nbsp;</span>,
  position: 'left-bottom',
  type: 'date',
}

export default Container
