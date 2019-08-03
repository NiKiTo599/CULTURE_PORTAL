import React from 'react';
import ModalVideo from 'react-modal-video';
import { I18n } from 'react-i18next';
import './authorStyles/video.scss';
import TitleStyle from './authorStyles/title.module.css';
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
      <I18n>
          {t => (
            <div>
              <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={videoId} onClose={() => this.setState({isOpen: false})}/>
              <button onClick={this.openModal} className={TitleStyle.video_btn}>
                {t('video')}
              <img src={ youTubeLogo } wight="20" height="20" className={TitleStyle.video_icon}/>
              </button>
            </div>
        )}
      </I18n>
    );
  }
}
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;