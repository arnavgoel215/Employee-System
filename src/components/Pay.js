const Pay = () => {
    const johnHours = 35
    const janeHours = 40
    const johnRate = 15.00
    const janeRate = 17.33
    const johnPay = johnHours * johnRate
    const janePay = janeHours * janeRate
    return ( 
        <table id="pay">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours Worked</th>
                    <th>Hourly Rate</th>
                    <th>Total Pay</th>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>{johnHours}</td>
                    <td>{johnRate.toFixed(2)}</td>
                    <td>{`$${johnPay.toFixed(2)}`}</td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>{janeHours}</td>
                    <td>{janeRate.toFixed(2)}</td>
                    <td>{`$${janePay.toFixed(2)}`}</td>
                </tr>
            </thead>
        </table>
     );
}
 
export default Pay;