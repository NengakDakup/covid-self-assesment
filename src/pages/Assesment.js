import React, {Component} from 'react';

import Question from '../components/Question'


// import { config } from '../config'



class Assesment extends Component { 
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          type: 'list',
          text: "Are you Experiencing any of the following symptoms?",
          list: [
            {
              title: 'Severe Difficulty in breathing',
              sub: '(struggling for each breath, can only speak in single words)'
            },
            {
              title: 'severe chest pain',
              sub: '(constant tightness or crushing sensation)'
            },
            {
              title: 'feeling confused',
              sub: '(for example, unsure of where you are)'
            },
            {
              title: 'losing consciousness'
            }
          ]

        },
        {
          type: 'options',
          text: 'Are you experiencing any of the following symptoms? Choose any/all that apply.',
          list: [
            {
              title: 'fever',
              sub: '(feeling hot to the touch, a temperature of 37.8 degrees Celsius or higher)'
            },
            {
              title: 'chills'
            },
            {
              title: 'cough that\'s new or worsening',
              sub: '(continuous, more than usual)'
            },
            {
              title: 'barking cough, making a squeaky or whistling noise when breathing',
              sub: '(croup)'
            },
            {
              title: 'shortness of breath',
              sub: '(out of breath, unable to breathe deeply)'
            },
            {
              title: 'sore throat'
            },
            {
              title: 'difficulty swallowing'
            },
            {
              title: 'hoarse voice',
              sub: '(more rough or harsh than normal)'
            },
            {
              title: 'runny nose'
            },
            {
              title: 'stuffy or congested nose'
            },
            {
              title: 'lost sense of taste or smell',
            },
            {
              title: 'headache'
            },
            {
              title: 'digestive issues',
              sub: '(nausea/vomiting, diarrhea, stomach pain)'
            },
            {
              title: 'fatigue',
              sub: '(lack of energy, extreme tiredness)'
            },
            {
              title: 'falling down more than usual'
            },
            {
              title: 'for young children and infants: sluggishness or lack of appetite'
            },
            {
              title: 'none of the above'
            }
          ]
        },
        {
          type: 'list',
          text: 'Do any of the following apply to you?',
          list: [
            {
              title: 'I am 65 years old or older',
            },
            {
              title: 'I have a condition that affects my immune system',
              sub: '(for example, HIV/AIDS, lupus, other autoimmune disorder)'
            },
            {
              title: 'I have a chronic health condition',
              sub: '(for example, diabetes, emphysema, asthma, heart condition)'
            },
            {
              title: 'I am getting treatment that affects my immune system',
              sub: '(for example, chemotherapy, corticosteroids, TNF inhibitors)'
            }
          ]
        },
        {
          type: 'single',
          text: 'Have you travelled outside of Nigeria in the last 14 days?'
        },
        {
          type: 'single',
          text: 'Has someone you are in close contact with tested positive for COVID-19?',
          sub: 'For example, someone in your household or workplace.'
        },
        {
          type: 'list',
          text: 'Are you in close contact with a person who either:',
          sub: 'Respiratory symptoms can include fever, cough or difficulty breathing.',
          list: [
            {
              title: 'is sick with new respiratory symptoms?',
              sub: 'or'
            },
            {
              title: 'recently travelled outside of Canada?'
            }
          ]
           
    
        }
      ],
      currentQuestion: 0,
      answers: []
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this)
  }
  
  nextQuestion(){
    this.setState({currentQuestion: this.state.currentQuestion + 1})
  }

  previousQuestion(){
    this.setState({currentQuestion: this.state.currentQuestion - 1})
  }

  saveAnswer(){
    this.nextQuestion();
  }
  
  render(){
    const {currentQuestion, questions} = this.state;
    return (
      <div className="container pt-5">
        <h3 className="text-center font-weight-bold">{currentQuestion + 1}/6</h3>
        <Question 
          data={questions[currentQuestion]} 
          saveAnswer={this.saveAnswer}
          
          />
      </div>
      );
  }
}

export default Assesment;

