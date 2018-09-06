import React from 'react';


export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        } else if (!this.props.meta.error || !this.props.meta.touched) {
            error = ( 
                <div style={{height: '18px'}}></div>)
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input">
                <div className="form-label">
                    <label htmlFor={this.props.input.name}>
                        {this.props.label}
                        {error}
                        {warning}
                    </label>
                </div>
                <div className="form-text-box">
                    <input
                        {...this.props.input}
                        id={this.props.input.name}
                        type={this.props.type}
                        ref={input => (this.input = input)}
                    />
                </div>
            </div>
        );
    }
}
