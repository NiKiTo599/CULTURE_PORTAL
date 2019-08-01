import React from 'react';
import ModalVideo from 'react-modal-video';
import './authorStyles/video.scss';
import TitleStyle from './authorStyles/title.module.css'
import youTubeLogo from '../../data/images/music-player-play.png';

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
    const { videoId } = this.props;
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={videoId} onClose={() => this.setState({isOpen: false})}/>
        <button onClick={this.openModal} className={TitleStyle.video_btn}>
        Watch on YouTube
        <img src={ youTubeLogo } wight="20" height="20" className={TitleStyle.video_icon}/>
        </button>
      </div>
    );
  }
}