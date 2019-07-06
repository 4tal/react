var Hello = React.createClass({
    render: function() {
        return <div>Hello, haters!</div>;
    }
});

ReactDOM.render(<Hello />, document.getElementById('container'));
