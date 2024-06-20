import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Companys Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                                            // Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        }        

                        {
                                             //Remaining component
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                        }        

                        {
                                            //ExpenseTotal component
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                        }        
                       
                        {
                                                     //ExpenseList component
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                        }         

                        {
                                                     //ExpenseItem component
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                        }        

                        {
                                                              //AllocationForm component
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
