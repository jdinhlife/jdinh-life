import React, { Component } from 'react'

import styles from './index.scss'

export default class Header extends Component {

  componentWillMount() {
    this.setState({
      scrolled: false
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = event.srcElement.body.scrollTop

    if (!this.state.scrolled && scrollTop !== 0) {
      this.setState({
        ...this.state,
        scrolled: true
      })
    } else if (this.state.scrolled && scrollTop === 0) {
      this.setState({
        ...this.state,
        scrolled: false
      })
    }
  }

  headerClassName() {
    return this.state && this.state.scrolled ? styles.headerScrolled : styles.header
  }

  render() {
    return (
      <header className={this.headerClassName()}>
        <div className={styles.logo}>
          <a className={styles.logoLink} href="/">{'JD\'s'}</a>
        </div>
        <nav className={styles.nav}>
          <button className={styles.navButton} >{'Button'}</button>
        </nav>
      </header>
    )
  }
}
