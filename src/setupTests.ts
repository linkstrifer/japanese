// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

global.SpeechSynthesisUtterance = jest.fn()
global.speechSynthesis = {
  addEventListener: jest.fn(),
  cancel: jest.fn(),
  dispatchEvent: jest.fn(),
  getVoices: jest.fn(),
  onvoiceschanged: jest.fn(),
  pause: jest.fn(),
  paused: false,
  pending: false,
  removeEventListener: jest.fn(),
  resume: jest.fn(),
  speak: jest.fn(),
  speaking: false,
}
