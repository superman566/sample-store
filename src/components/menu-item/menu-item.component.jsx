import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

// const MenuItem = (props) => {
//   return (
//     <div
//       className={`${props.size} menu-item`}
//       onClick={()=> props.history.push(`${props.match.url}${props.linkUrl}`)}
//     >
//       <div
//         className={'background-image'}
//         style={{backgroundImage: `url(${props.imageUrl})`}}>
//       </div>
//       <div className={'content'}>
//         <h1 className={'title'}>{props.title.toUpperCase()}</h1>
//         <span className={'subtitle'}>Shop Now</span>
//       </div>
//     </div>
//   )
// };

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
