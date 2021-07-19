import React from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image, id } = this.props.pokemon;

        return (
            <Link to={ `/details/${id}` }>
                <div className="pokemon">
                    <div>
                        <p> {name} </p>
                        <p> {type} </p>
                        <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    </div>
                    <img src={image} alt={`${name} sprite`} />
                </div>
            </Link>
        );
    }
}

export default Pokemon;