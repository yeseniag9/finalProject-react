import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseName, chooseNickname, chooseDate, chooseSize } from "../redux/slices/RootSlice";

interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => { 
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data) 
    if (props.id && props.id.length > 0) { 
      server_calls.update(props.id[0], data) 
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name))
      dispatch(chooseNickname(data.nickname))
      dispatch(chooseDate(data.date))
      dispatch(chooseSize(data.size))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }

  return (
    <div className="pb-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Sneaker Name</label>
          <Input {...register('name')} name="name" placeholder="Name" />
        </div>
        <div className="pt-3">
          <label htmlFor="nickname">Nickname</label>
          <Input {...register('nickname')} name="nickname" placeholder="Nickname" />
        </div>
        <div className="pt-3">
          <label htmlFor="date">Release Date</label>
          <Input {...register('date')} name="date" placeholder="Date" />
        </div>
        <div className="pt-3">
          <label htmlFor="size">Size</label>
          <Input {...register('size')} name="size" placeholder="Size" />
        </div>          <div className="flex justify-center">
        <Button
          className="flex mb-8 bg-red-600 p-2 pl-12 pr-12 rounded hover:bg-slate-800 text-white mt-10"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>    
  )
}

export default ContactForm