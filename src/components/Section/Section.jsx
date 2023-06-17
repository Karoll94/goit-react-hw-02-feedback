import React, {Component} from "react";
import style from './Section.module.css';

class Section extends Component {

    static defaultProps = {
        title: 'Section',
    };

    render(){
        const {title, children} = this.props;
        return(
            <section className= {style.sectionComponent}>
                <h1 className= {style.title}>{title}</h1>   
                    {children}
            </section>
        );
    };
};

export default Section; 