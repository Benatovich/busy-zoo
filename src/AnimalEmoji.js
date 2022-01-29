export default function AnimalEmoji(props) {
  return <div className='animal'>
    {props.animal === 'rat' && '🐀'}
    {props.animal === 'hippo' && '🦛'}
    {props.animal === 'penguin' && '🐧'}
    {props.animal === 'rooster' && '🐓'}
    {props.animal === 'hedgehog' && '🦔'}
    {props.animal === 'badger' && '🦡'}
  </div>;
}