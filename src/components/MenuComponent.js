import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

    render() {
        // console.log("MenuComponent REdender "+ JSON.stringify(this.state));
        const menu = this.props.dishes.map((dish, index) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={index} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.state.selectedDish != null ? (<DishDetail selectedDish={this.state.selectedDish} />): null}
            </div>
        );
    }
}

export default Menu;