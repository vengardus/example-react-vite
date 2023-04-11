import { useState } from 'react'

const GoalForm = (props) => {
  const [formData, setFormData] = useState({ goal: '', by: '' })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    props.onAdd(formData)
    setFormData({ goal: '', by: '' })
  }

  return (
    <>
      <h1>My little List of Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='goal'
          placeholder='Goal'
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type='text'
          name='by'
          placeholder='By'
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

const ListOfGoals = (props) => {
  return (
    <ul>
      {
        props.allGoals.map((goal) => (
          <li key={goal.goal}>
            <span>My goal is to {goal.goal}, by {goal.by}</span>
          </li>
        ))
      }
    </ul>
  )
}

export const Goal = () => {
  const [allGoals, setAllGoals] = useState([])

  const addGoal = (goal) => {
    setAllGoals([...allGoals, goal])
  }

  return (
    <div className=''>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  )
}
