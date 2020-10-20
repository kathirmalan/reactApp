import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import moment from 'moment';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardBody>{dish.description}</CardBody>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderDishcomments(sDish) {
        console.log(sDish.comments);

        const detail_detail = sDish.comments.map((x, index) => (
            <div key={index}>
              <p>{x.comment}</p>
              <p>-- {x.author}, {moment(x.date).format("MMM d, YYYY") }</p>
            </div>
          ));
        
        return (
            <div className="navigation">
                {detail_detail}
            </div>
        );
    }

    render() {
        // console.log(this.props.selectedDish);
        const {selectedDish } = this.props;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {this.renderDishcomments(selectedDish)}
                </div>
            </div>
        )
    }
}

export default DishDetail;