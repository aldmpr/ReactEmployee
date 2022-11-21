import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

    const data = [
        {name: 'Aleksandr Prokopovich', salary: 4300, increase: false, id: 1},
        {name: 'Veronika Shcherbyna', salary: 5500, increase: true, id: 2},
        {name: 'Alex Rudoy', salary: 10000, increase: false, id: 3}
    ]
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;