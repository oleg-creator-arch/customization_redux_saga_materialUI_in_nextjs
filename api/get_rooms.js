import axios from 'axios';
import React, { Component } from 'react';

export default class Index extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Index Component!!</p>
            </div>
        )
    }
}

export const GG_WP_URL = 'http://0.0.0.0:3000/api/v1/rooms.json'