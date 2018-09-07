import React, { Component } from 'react';

import qJSON from '../public/assets/q.json';

import Graphic from './client/graphic';
import Question from './client/question';
import LanguageSelector from './client/language';
import { 
  CenteredContainer as Center,
  FooterButton, 
  Section 
} from './client/ui';

const LANG_LIST = ['esp', 'eng']
const INITIAL_VALUE = 0;
const MIN_VALUE = 0;
const MAX_VALUE = 10;
const OFTEN_COLOR = ['#AA7700', '#AA1100', '#FF0000'];
const OFTEN_RANGE = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2];

class App extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleLangClick = this.handleLangClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);

    this.langChangeHandler = LANG_LIST.map((v, it) => () => { this.setState({ langIt: it }) });

    const { length } = qJSON.questions;
    this.state = {
      current: 0,
      langIt: 0,
      values: new Array(length).fill(INITIAL_VALUE) 
    };
  }

  render() {
    const { current, langIt, values } = this.state;
    const l = LANG_LIST[langIt];
    const value = values[current];

    const instructions = qJSON.instructions[l];
    const {
      of,
      profiles,
      question,
      next,
      reset,
      results,
      root,
      test,
      drives
    } = instructions;

    const often = instructions.often[OFTEN_RANGE[value]];
    const oftenColor = OFTEN_COLOR[OFTEN_RANGE[value]];
    

    const number = current + 1;
    const { questions } = qJSON;
    const text = questions[current][l];
    const total = questions.length;

    const profileVal = new Array(4).fill(0);
    values.forEach((v, it) => { profileVal[it%4] += v; });
    
    return (
      <div style={{ maxWidth: '35%', margin: 'auto' }}>
        <Section {...test} backgroundColor="black" color="white" />
        <Section>
          <LanguageSelector current={langIt} handlers={this.langChangeHandler} list={LANG_LIST} texts={qJSON.instructions} />
          <Question 
            min={MIN_VALUE}
            max={MAX_VALUE}
            onChange={this.handleQuestionChange} 
            root={root}
            text={text} 
            value={value}
            category={often}
            catColor={oftenColor}
          />
          {number < total && <FooterButton onClick={this.handleNextClick} text={next} />}
          <Center>
            <text 
              style={{ 
                color: 'gray', 
                fontSize: '9px',
                pointerEvents: 'none',
                textAlign: 'right',
                width: '40%'
              }} 
            >
              {question+number+of+total}
            </text>
          </Center>
        </Section>
        <Section {...results} backgroundColor="black" color="white">
          <Graphic drives={drives} profiles={profiles} values={profileVal} width={400} />
        </Section>
        {number === total && <FooterButton onClick={this.handleResetClick} text={reset} />}
      </div>
    );
  }

  handleLangClick(e) {
    const it = this.state.langIt + 1;
    this.setState({ langIt: it < LANG_LIST.length ? it : 0 })
  }

  handleNextClick(e) {
    this.setState({ current: this.state.current + 1 });
  }

  handleResetClick(e) {
    const { length } = qJSON.questions;
    this.setState({
      current: 0,
      values: new Array(length).fill(INITIAL_VALUE)
    });
  }

  handleQuestionChange(value) {
    const { current, values } = this.state;
    this.setState({ values: values.fill(value, current, current + 1) })
  }
}

export default App;
