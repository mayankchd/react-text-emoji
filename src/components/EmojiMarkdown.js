import React , {Component} from 'react';
import Emoji from './Emoji';

class EmojiMarkdown extends Component{

  constructor(props , context){
    super(props , context);
     this.state = {
       value : 'Hello, Im sad, make me happy. Dad is coming! I want to eat pizza.'
     };
   }

  strToWords(str) {
    let words = [];
    let lines = str.split('\n');
    lines.filter((line) => line?true:false)
        .forEach((line) => {
              words = words.concat(line.split(' ')
                         .filter((line) => line?true:false));
        });
    return words;
  }

  handleChange(e){
    this.setState({
      value : e.target.value
   });
  }

   render() {
     return (
        <div className='markdown'>
          <textarea
            onChange={this.handleChange.bind(this)}
            ref="textarea"
            defaultValue={this.state.value}
          >
          </textarea>

          <div>
          {this.strToWords(this.state.value).map((w , i) => <Emoji word={w} key={i} />)}
          </div>
        </div>
      );
   }
}

export default EmojiMarkdown;
