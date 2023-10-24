import './languages.css';
import { ProgressBar } from '../../ProgressBar/ProgressBar';

export default function Languages() {
  return (
    <div className='languages'>
        <h2 className='languages-title'>LANGUAGES</h2>
        <div className='languages-container'>
            <p className='languages-container-title'>Spanish <small>(Native)</small></p>
            <ProgressBar percentage='100' />
        </div>
        <div className='languages-container'>
            <p className='languages-container-title'>English <small>(C1)</small></p>
            <ProgressBar percentage='85' />
        </div>
        <div className='languages-container'>
            <p className='languages-container-title'>Portuguese <small>(B1)</small></p>
            <ProgressBar percentage='70' />
        </div>
    </div>
  )
}
