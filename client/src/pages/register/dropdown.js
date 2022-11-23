import Dropdown from 'react-dropdown';
import './DropDownStyle.css';

export const Select = (props) => {
    return (
        <div className='flex flex-col items-start mt-[10px] w-full align-baseline'>
            <div className='w-full text-left'>
                <Dropdown
                    options={props.options}
                    placeholder={props.st === null ? 'Select...' : props.st}
                    onChange={(value) => { props.setSt(value.value); }}
                    placeholderClassName={props.st === null ? "plnull" : "plfull"}
                />
            </div>
        </div>
    )
}