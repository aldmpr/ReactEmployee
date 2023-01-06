import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting at "Company Name"</h1>
            <h3>Total number of employees: {employees}</h3>
            <h3>The award will be given to: {increased}</h3>
        </div>
    )
}

export default AppInfo;