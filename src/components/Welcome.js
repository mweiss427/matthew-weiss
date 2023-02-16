import { SocialIcon } from 'react-social-icons';
import {ReactComponent as Logo} from '../assets/goodreads.svg';

let goodreadsLogo = {

}
function Welcome(){
    return (
    <>
      <h1>Matt Weiss</h1>
      <SocialIcon fgColor="gold" bgColor="green" url="https://twitter.com/matt_e_weiss" />
      <SocialIcon label="Good Reads" url="https://www.goodreads.com/user/show/155404219-matthew-weiss" />
      <SocialIcon netowrk="Facebook" url="https://www.facebook.com/Weiss.Matthew" />
    </>);
  }

export default Welcome;