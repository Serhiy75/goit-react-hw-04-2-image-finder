import { RotatingLines } from 'react-loader-spinner';
import { Component } from 'react';
import { LoaderDiv } from './Loader.styled';

export class Loader extends Component {
  render() {
    return (
      <LoaderDiv>
        <RotatingLines
          strokeColor="#3f51b5"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderDiv>
    );
  }
}
