import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import GastosForm from '../components/alice01/GastosForm'
import GastosList from '../components/alice01/GastosList'
import { Layout } from '../components/ui/Layout'

export const Alice01Page = () => {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <GastosForm />
          <GastosList />
        </Layout>
      </Provider>
    </div>
  )
}
