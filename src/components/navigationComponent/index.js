import { Link } from "react-router-dom";

export function NavigationComponent({props}) {
  return (
    <div className='row'>
      <div className='col-6'>
        <a role="button" href="#" onClick={props.history.goBack} className='text-left'><p><i className="fas fa-chevron-left"></i> back</p></a>
      </div>
      <div className='col-6'>
        <Link to={'/'} className='text-right'><p>home <i className="fas fa-home"></i></p></Link>
      </div>
    </div>
    );
}