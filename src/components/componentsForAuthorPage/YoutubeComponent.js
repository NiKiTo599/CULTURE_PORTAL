import React from 'react';
import ModalVideo from 'react-modal-video';

export default class YoutubeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})}/>
        <div onClick={this.openModal}>
          <h3>Watch the Video</h3>
        </div>
      </div>
    );
  }
}