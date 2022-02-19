import './App.css';
import SingleComment from './Components/SingleComment';
import Cards from './Components/Card';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './Components/Comments';
import Axpost from './Components/Axpost';
import Location from './Components/Location';
import Ref from './Ref';
import Parent from './Parent';

const App= () => {
  return (
    <div className="ui comments">
      {/* <Parent/> */}
      <Ref/>
      {/* <Location /> */}
      {/* <Axpost/> */}
      {/* <Comments/> */}
      {/* <Card className="text-center">
        <Card.Header>Comments</Card.Header>
        <Cards title='Dev'
        time='today at 06:00pm'
        comments='wow!! Its Amazing'/>
        <Cards title='Himanshu'
        time='today at 07:30pm'
        comments='Thanks'/>
        <Cards title='Rohit'
        time='today at 06:00pm'
        comments='Great!! Thanks'/>
        </Card> */}
      {/* <SingleComment profile='https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg'
      name='Dev'
      desc='This blog is amazing'/>
      <SingleComment profile='https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg'
      name='Shrey'
      desc='Its really cool'/>
      <SingleComment profile='https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg'
      name='Himanshu'
      desc='Weather is very good today'/> */}
    </div>
  );
}

export default App;
