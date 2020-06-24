//Markdown placeholder gotten from freeCodeCamp example.
//Inspired by Ramon Carroll

const MarkdownPreviewer = React.createClass({ displayName: "MarkdownPreviewer",

  input: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`,

  getInitialState: function () {
    return {
      convertedText: marked(this.input) };

  },

  createMarkup: function () {
    return {
      __html: this.state.convertedText };

  },

  convert: function () {
    let markdown = document.getElementById('editor').value;
    this.setState({
      convertedText: marked(markdown) });

  },

  render: function () {
    return (
      React.createElement("div", { className: "text-box" },
      React.createElement("textarea", {
        onKeyUp: this.convert,
        onPaste: this.convert,
        className: "editor",
        id: "editor",
        defaultValue: this.input }),

      React.createElement("div", {
        className: "preview",
        id: "preview",
        dangerouslySetInnerHTML: this.createMarkup() })));



  } });


const App = React.createClass({ displayName: "App",
  render() {
    return (
      React.createElement(MarkdownPreviewer, null));

  } });


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));