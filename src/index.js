import pretty from 'pretty-time'

/**
 * @typedef {'ns' | 'μs' | 'ms' | 's' | 'm' | 'h' | 'd' | 'w'} TimeIncrements
 */

export class Timer {
  /** @type {string} */
  label
  /** @type {[number, number]} */
  start

  /**
   * @param {string} [label]
   * @param {[number, number]} [start]
   */
  static start(label, start = process.hrtime()) {
    return new Timer(label, start)
  }

  /**
   * @param {string} [label]
   * @param {[number, number]} [start]
   */
  constructor(label, start) {
    this.label = label
    this.start = start
  }

  /**
   * @param {TimeIncrements} [smallest]
   */
  end(smallest) {
    const time = process.hrtime(this.start)
    return this.label
      ? `${this.label} took: ${pretty(time, smallest || 's')}`
      : pretty(time, smallest || 's')
  }
}
