# Employee Data Management
## A Comprehensive Directory of Employee Billable Hours
- Jose
- Cuong
- John

A simple Firebase DB app that will display and add the following data:
- Employee Name (Required)
- Role (Required)
- Start Date
- Months Worked
- Monthly Rate [$] (Required)
- Total Billed [$]

### Calculations
- `Start Date`, will calculate `Months Worked` by `Start Date - Date.now()`
- `Total Billed` is equal to `Months Worked * Monthly Rate`