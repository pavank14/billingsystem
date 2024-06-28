import React, { useState, useRef } from 'react';
import './App.css';
import logo from './25.png'; // Import your logo file

function App() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [lightBill, setLightBill] = useState(0);
const [discount, setDiscount] = useState(0);
  const [date, setDate] = useState('');
  const [packageOption, setPackageOption] = useState('');
  const [items, setItems] = useState([]);
  const [showInvoice, setShowInvoice] = useState(true);
  const billRef = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePackageChange = (e) => {
    setPackageOption(e.target.value);

    
    // Set items based on the selected package
    switch (e.target.value) {
      case 'Custom':
        setItems([
          { id: 1, name: 'मंगल कार्यालय\n1. एयर कूलिंग हॉल\n2. वर-वधू रूम अँड अटॅच बाथरूम\n3. व्ही. आय. पी डायनिंग हॉल\n4. दोन अटॅच टॉयलेट & बाथरूम\n5. दोन सध्या रूम', price: 20000, quantity: 0 },
          { id: 2, name: 'साऊंड सिस्टम\n1. Amplifier\n2. स्पीकर\n3. माइक', price: 2500, quantity: 0 },
          { id: 3, name: 'साऊंड सिस्टम मिक्सर', price: 3000, quantity: 0 },
          { id: 4, name: 'बफे टेबल', price: 100, quantity: 0 },
          { id: 5, name: 'हॅन्डेल खुर्ची', price: 10, quantity: 0 },
          { id: 6, name: 'साधी खुर्ची', price: 10, quantity: 0 },
          { id: 7, name: 'खुर्ची कव्हर', price: 15, quantity: 0 },
          { id: 8, name: 'व्हि.आय.पी. खुर्ची', price: 0, quantity: 0 },
          { id: 9, name: 'व्हि.आय.पी.सोपा', price: 500, quantity: 0 },
          { id: 10, name: 'टि-पॉय', price: 100, quantity: 0 },
          { id: 11, name: 'फोम गादी', price: 50, quantity: 0 },
          { id: 12, name: 'उशी', price: 20, quantity: 0 },
          { id: 13, name: 'लोड', price: 50, quantity: 0 },
          { id: 14, name: 'बेडशिट', price: 50, quantity: 0 },
          { id: 15, name: 'चादर', price: 50, quantity: 0 },
          { id: 16, name: 'महाराजा खुर्ची', price: 2100, quantity: 0 },
          { id: 17, name: 'हवनकुंड', price: 500, quantity: 0 },
          { id: 18, name: 'जंम्बो कुलर', price: 1000, quantity: 0 },
          { id: 19, name: 'बफे स्टॉल', price: 0, quantity: 0 },
          { id: 20, name: 'रुकवत स्टेज', price: 500, quantity: 0 },
          { id: 21, name: 'फोटो फ्रेम स्टँड', price: 200, quantity: 0 },
          { id: 22, name: 'गायन स्टेज', price: 500, quantity: 0 },
          { id: 23, name: 'कुंडी', price: 50, quantity: 0 },
          { id: 24, name: 'डि-फ्रिजर', price: 0, quantity: 0 },
          { id: 25, name: 'फोटो फ्रेम', price: 500, quantity: 0 },
          { id: 26, name: 'गादी', price: 50, quantity: 0 },
          { id: 27, name: 'कमान - बोगदा [ पांढरा ]', price: 8000, quantity: 0 },
          { id: 28, name: 'कमान - बोगदा [ पिवळा ]', price: 6000, quantity: 0 },
          { id: 29, name: 'स्टेज डेकोरेशन', price: 21000, quantity: 0 },
          { id: 30, name: 'लग्नाचा सोफा', price: 1000, quantity: 0 },
          { id: 31, name: 'फ्रिल', price: 10, quantity: 0 },
          { id: 32, name: 'आर्टिफिश्यल झाडे', price: 100, quantity: 0 },
          { id: 33, name: 'फेरा मंडप', price: 0, quantity: 0 },
          { id: 34, name: 'मेटा लाईट', price: 0, quantity: 0 },
          { id: 35, name: 'पार लाईट', price: 200, quantity: 0 },
          { id: 36, name: 'मिनिचर लाईट', price: 0, quantity: 0 },
          { id: 37, name: 'सतरंजी', price: 0, quantity: 0 },
          { id: 38, name: 'लहान कुलर', price: 500, quantity: 0 },
          { id: 39, name: 'जनरेटर', price: 0, quantity: 0 },
          { id: 40, name: 'मेंहदी मंडप', price: 0, quantity: 0 },
          { id: 41, name: 'ब्राम्हण / जंगम', price: 0, quantity: 0 },
          { id: 42, name: 'घोडा (छत्रीसहीत)', price: 0, quantity: 0 },
          { id: 43, name: 'हार, गजरे, गुच्छ', price: 0, quantity: 0 },
          { id: 44, name: 'बॅनर व नाव', price: 0, quantity: 0 },
          { id: 45, name: 'पाणी जार', price: 0, quantity: 0 },
          { id: 46, name: 'गाडी सजविणे', price: 0, quantity: 0 },
          { id: 47, name: 'बॅन्ड', price: 0, quantity: 0 },
          { id: 48, name: 'फेटा बांधणारा', price: 0, quantity: 0 },
          { id: 49, name: 'अक्षदा', price: 0, quantity: 0 },
          { id: 50, name: 'फटाकडी लड', price: 0, quantity: 0 },
          { id: 51, name: 'डायस', price: 0, quantity: 0 },
          { id: 52, name: 'मिटर रिडींग', price: 0, quantity: 0 },
          { id: 53, name: 'संगित मंगल आष्टिका', price: 0, quantity: 0 },
          { id: 54, name: 'सनई चौघडा', price: 0, quantity: 0 },
          { id: 55, name: 'तुतारी संच', price: 0, quantity: 0 },
          { id: 56, name: 'पालखी संच', price: 0, quantity: 0 },
          { id: 57, name: 'वाचमन', price: 400, quantity: 0 },
          { id: 58, name: 'स्वंयपाकी', price: 0, quantity: 0 },
          { id: 59, name: 'हळदी मंडप', price: 0, quantity: 0 },
          { id: 60, name: 'गॅस सिलेंडर (कमर्शियल)', price: 0, quantity: 0 },
          { id: 61, name: 'कढई (मोठी)', price: 100, quantity: 0 },
          { id: 62, name: 'कढई', price: 100, quantity: 0 },
          { id: 63, name: 'लहान पातेले', price: 100, quantity: 0 },
          { id: 64, name: 'मोठे पातेले', price: 150, quantity: 0 },
          { id: 65, name: 'झाकन', price: 0, quantity: 0 },
          { id: 66, name: 'जिलेबी तवा कडई', price: 100, quantity: 0 },
          { id: 67, name: 'उलथणे', price: 30, quantity: 0 },
          { id: 68, name: 'चपाती उतथणे', price: 10, quantity: 0 },
          { id: 69, name: 'स्टैंड शेगडी', price: 100, quantity: 0 },
          { id: 70, name: 'जंम्बो शेगडा', price: 100, quantity: 0 },
          { id: 71, name: 'चपाती भट्टी', price: 200, quantity: 0 },
          { id: 72, name: 'तास', price: 50, quantity: 0 },
          { id: 73, name: 'मठ्ठा टिप', price: 50, quantity: 0 },
          { id: 74, name: 'स्टिल टब', price: 100, quantity: 0 },
          { id: 75, name: 'नाष्टा प्लेट', price: 2, quantity: 0 },
          { id: 76, name: 'फायबर प्लेट', price: 3, quantity: 0 },
          { id: 77, name: 'फायबर वाटी', price: 1, quantity: 0 },
          { id: 78, name: 'स्टिल वाटी', price: 1, quantity: 0 },
          { id: 79, name: 'स्टिल प्लेट', price: 3, quantity: 0 },
          { id: 80, name: 'स्टिल ग्लास', price: 1, quantity: 0 },
          { id: 81, name: 'टोपले', price: 10, quantity: 0 },
          { id: 82, name: 'बकिट', price: 10, quantity: 0 },
          { id: 83, name: 'जग', price: 10, quantity: 0 },
          { id: 84, name: 'भातवाडी', price: 10, quantity: 0 },
          { id: 85, name: 'पळी', price: 10, quantity: 0 },
          { id: 86, name: 'वगराळे', price: 10, quantity: 0 },
          { id: 87, name: 'चमचे', price: 10, quantity: 0 },
          { id: 88, name: 'चहा थर्मास', price: 100, quantity: 0 },
          { id: 89, name: 'जर्मन सुप', price: 50, quantity: 0 },
          { id: 90, name: 'आटा चाळणी', price: 50, quantity: 0 },
          { id: 91, name: 'चहा चाळणी', price: 20, quantity: 0 },
          { id: 92, name: 'ताडपत्री', price: 0, quantity: 0 },
          { id: 93, name: 'सतरंजी', price: 50, quantity: 0 },
          { id: 94, name: 'चौरंग', price: 50, quantity: 0 },
          { id: 95, name: 'पाट', price: 20, quantity: 0 },
          { id: 96, name: 'इडली पात्र', price: 500, quantity: 0 },
          { id: 97, name: 'भाजी पात्र', price: 0, quantity: 0 },
          { id: 98, name: 'दांडी पातेले', price: 20, quantity: 0 },
          { id: 99, name: 'बफे हॉटपॅट', price: 200, quantity: 0 },
          { id: 100, name: 'स्टिल ताट', price: 5, quantity: 0 },
          { id: 101, name: 'पान सुपारी ट्रे', price: 50, quantity: 0 },
          { id: 102, name: 'आसन पट्टी', price: 20, quantity: 0 },
          { id: 103, name: 'चपाती पाट', price: 20, quantity: 0 },
          { id: 104, name: 'बेलने', price: 10, quantity: 0 },
          { id: 105, name: 'खिसनी', price: 20, quantity: 0 },
          { id: 106, name: 'बतई', price: 20, quantity: 0 },
          { id: 107, name: 'वेळी', price: 10, quantity: 0 },
          { id: 108, name: 'समई', price: 0, quantity: 0 },
          { id: 109, name: 'ग्रॅडर', price: 500, quantity: 0 },
          { id: 110, name: 'डायस', price: 500, quantity: 0 },
          { id: 111, name: 'जर्मन परात', price: 100, quantity: 0 },
          { id: 112, name: 'समई', price: 0, quantity: 0 },
          { id: 113, name: 'ग्रॅडर', price: 500, quantity: 0 },
          { id: 114, name: 'डायस', price: 500, quantity: 0 },
          { id: 115, name: 'जर्मन परात', price: 100, quantity: 0 },
          { id: 116, name: 'जनरेटर', price: 5000, quantity: 0 },
          { id: 117, name: 'cold fire', price: 500, quantity: 0 }
        ]);
        break;

      case 'Premium':
        // Set items without input fields for price and quantity
        setItems([
          
          { id: 1, name: 'आर्टिफिशल झाड व कुंडे  ', price: 100, quantity: 0 },
          { id: 2, name: 'लग्नाचा खर्ची :', price: 10, quantity: 0 },
          { id: 3, name: 'खुर्ची  कव्हर', price: 15, quantity: 0 },
          { id: 4, name: 'वाडपी बाइका ', price: 400, quantity: 0 },
          { id: 5, name: 'वाडपी पोर ', price: 500, quantity: 0 },
          { id: 6, name: 'प्लेट उचलणारी मुले  ', price: 500, quantity: 0 },
          { id: 7, name: 'गाढी', price: 50 , quantity: 0 },
          { id: 8, name: 'लोड', price: 50, quantity: 0 },
          { id: 9, name: 'मोठा कूलर', price: 1000, quantity: 0 },
          { id: 10, name: 'लहान कुलर ', price: 500, quantity: 0 }
        ]);
        break;
      case 'Platinum':
        setItems([
          { id: 1, name: 'आर्टिफिशल झाड व कुंडे  ', price: 100, quantity: 0 },
          { id: 2, name: 'लग्नाचा खर्ची :', price: 10, quantity: 0 },
          { id: 3, name: 'खुर्ची  कव्हर', price: 15, quantity: 0 },
          { id: 4, name: 'वाडपी बाइका ', price: 400, quantity: 0 },
          { id: 5, name: 'वाडपी पोर ', price: 500, quantity: 0 },
          { id: 6, name: 'प्लेट उचलणारी मुले  ', price: 500, quantity: 0 },
          { id: 7, name: 'गाढी', price: 50 , quantity: 0 },
          { id: 8, name: 'लोड', price: 50, quantity: 0 },
          { id: 9, name: 'मोठा कूलर', price: 1000, quantity: 0 },
          { id: 10, name: 'लहान कुलर ', price: 500, quantity: 0 }
        ]);
        break;
      case 'Standard':
        setItems([
          { id: 1, name: 'आर्टिफिशल झाड व कुंडे  ', price: 100, quantity: 0 },
          { id: 2, name: 'लग्नाचा खर्ची :', price: 10, quantity: 0 },
          { id: 3, name: 'खुर्ची  कव्हर', price: 15, quantity: 0 },
          { id: 4, name: 'वाडपी बाइका ', price: 400, quantity: 0 },
          { id: 5, name: 'वाडपी पोर ', price: 500, quantity: 0 },
          { id: 6, name: 'प्लेट उचलणारी मुले  ', price: 500, quantity: 0 },
          { id: 7, name: 'गाढी', price: 50 , quantity: 0 },
          { id: 8, name: 'लोड', price: 50, quantity: 0 },
          { id: 9, name: 'मोठा कूलर', price: 1000, quantity: 0 },
          { id: 10, name: 'लहान कुलर ', price: 500, quantity: 0 }
        ]);
        break;
      default:
        setItems([]);
        break;
    }
  };

  const handleQuantityChange = (id, e) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: parseInt(e.target.value) };
      }
      return item;
    });
    setItems(newItems);
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const toggleView = () => {
    setShowInvoice(!showInvoice);
  };
  const handleLightBillChange = (e) => {
    setLightBill(parseFloat(e.target.value) || 0);
  };
  
  const handleDiscountChange = (e) => {
    setDiscount(parseFloat(e.target.value) || 0);
  };
  
  const goBack = () => {
    setShowInvoice(true);
  };

  const printBill = () => {
    window.print();
  };
 const grandTotal = totalPrice + 
  (packageOption === 'Premium' ? 136700 
  : packageOption === 'Platinum' ? 114200 
  : packageOption === 'Standard' ? 92900 
  : 0) 
  + lightBill - discount;

  return (
                //..............1st page.......................................................                                                          
    <div>
      {showInvoice ? (
        <div className="invoice-container" ref={billRef}>
          <div className="invoice-header">
          
            <img src={logo} alt="Logo" className="invoice-logo" />
            <div className="invoice-header-text">
            <input type="date" value={date} onChange={handleDateChange} />
            <div className='heading'>
              <h3>Aditi mangal karyalay</h3>
              <p>Pankaj Kulkarni - 9604478076</p>
              <p>At Post Nitur, Tq Nilanga, Dist Latur-413530</p>
            </div>
            </div>
            
          </div>
          <hr />
          <div >
          <div className="input-wrapper">
    <div>
        <label className="custom-label">Name: </label>
        <input className="custom-input1" type="text" value={name} onChange={handleNameChange} />
    </div>
    <div>
        <label className="custom-label">Mobile No.:</label>
        <input className="custom-input3" type="text" value={mobile} onChange={handleMobileChange} />
    </div>
</div>

  
            <label className="custom-label">Package: </label>
            <select className="custom-input3" value={packageOption} onChange={handlePackageChange}>
              <option value="">Select Package</option>
              <option value="Custom">Custom</option>
              <option value="Premium">Premium</option>
              <option value="Platinum">Platinum</option>
              <option value="Standard">Standard</option>

            </select>
          </div>
          <hr />
          <div className="invoice-items">
            {/* Display first table for Premium package without input fields for price and quantity */}
            {packageOption === 'Premium' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>quantity</th>
                    
                  </tr>
                </thead>
                <tbody>
                 
                    <tr >
                      <td>1.</td>
                      <td>एयर कूलिगं हॉल  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>2.</td>
                      <td> वर-वधूरूम अडँ अटॅच बाथरूम</td>
                      <td>2</td>
                    </tr>
                    <tr >
                      <td>3.</td>
                      <td>वऱ्हाडी साठी रूम :<br/><br/>
 1. दोन अटॅच टॉयलेट & बाथरूम<br/>
 2. दोन सध्या रूम </td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>4.</td>
                      <td>व्ही. आय. पी डायनिगं हॉल</td>
                      <td>1</td>
                    </tr><tr >
                      <td>5.</td>
                      <td>स्वयंपाकचे भांडे</td>
                      <td>1,500 लोकांचे </td>
                    </tr>
                    <tr >
                      <td>6.</td>
                      <td>जेवण्या साठी प्लेट आणि वाटी  </td>
                      <td>1,500</td>
                    </tr>
                    <tr >
                      <td>7.</td>
                      <td>लग्नाचा खर्ची  :<br/><br/>
 1. 300 हॅंडल वाले<br/>
 2. 700 बिगर हॅंडल <br/></td>
                      <td>1,000 </td>
                    </tr>
                    <tr >
                      <td>8.</td>
                      <td>खर्ची कव्हर </td>
                      <td>1,000</td>
                    </tr>
                    <tr >
                      <td>9.</td>
                      <td>लग्नाचा सोफा </td>
                      <td>1</td>
                    </tr>
                    
                   
                    <tr >
                      <td>10.</td>
                      <td>साऊं ड सिस्टम<br/><br/>
 1. Amplifier<br/>
 2. स्पीकर<br/>
 3. माइक<br/>
 4. mixer <br/>
</td>
                      <td>1</td>
                    </tr><tr >
                      <td>11.</td>
                      <td>रुखवत स्टेज</td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>12.</td>
                      <td>गायन स्टेज  </td>
                      <td>1 </td>
                    </tr>
                    
                    <tr >
                      <td>13.</td>
                      <td>फोटो स्टेज  </td>
                      <td>1</td>
                    </tr>
                    
                    <tr >
                      <td>14.</td>
                      <td>मैन गेट बॅनर  <br/><br/>
                      1. [ 2 x 6 ]</td>
                      <td>1</td>
                    </tr>
                      <td>15.</td>
                      <td>जनरेटर ( डिझले सोडून)</td>
                      <td>1</td>
                   
                    <tr >
                      <td>16.</td>
                      <td>डायनिगं हॉल टेबल ( फ्रिल सहित ) </td>
                      <td>100</td>
                    </tr>
                    <tr >
                      <td>17.</td>
                      <td>डायनिगं हॉल खर्ची ु ( कव्हार सहित ) </td>
                      <td>300</td>
                    </tr>
                    <tr >
                      <td>18.</td>
                      <td>डायनिगं हॉल एयर कूलिगं संहित </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>19.</td>
                      <td>फोटो स्टँड:<br/><br/>
1. दोन [4 x 6 ]<br/>
2. दोन [3 x 4 ]<br/></td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>20.</td>
                      <td>वाचमन  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>21.</td>
                      <td>कुंडे   </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>22.</td>
                      <td>बोगदा</td>
                      <td>1  [ पांढर ]</td>
                    </tr>
                    <tr >
                      <td>23.</td>
                      <td>गणपती डेकोरेशन  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>24.</td>
                      <td>गादी </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>25.</td>
                      <td>लोड </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>26.</td>
                      <td>स्टेज प्रीमियम  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>27.</td>
                      <td>कोल्ड फायर</td>
                      <td>6</td>
                    </tr>
                    <tr >
                      <td>28.</td>
                      <td>वऱ्हाडी साठी वेगळ बाथरूम </td>
                      <td>10</td>
                    </tr>
                </tbody>
              </table>)}
             
              
         
            
            {packageOption === 'Premium' && <div className="package-total" style={{ textAlign: 'right' }}><hr/><h3>Package Total: ₹1,36,700</h3><hr/></div>}
  
         

            {/* Display second table for Premium package with input fields for price and quantity */}
            {packageOption === 'Premium' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <input className='input12'
                          type="number"
                          
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e)}
                        />
                      </td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
           
            {packageOption === 'Platinum' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>quantity</th>
                    
                  </tr>
                </thead>
                <tbody>
                 
                <tr >
                      <td>1.</td>
                      <td>एयर कूलिगं हॉल  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>2.</td>
                      <td> वर-वधूरूम अडँ अटॅच बाथरूम</td>
                      <td>2</td>
                    </tr>
                    <tr >
                      <td>3.</td>
                      <td>वऱ्हाडी साठी रूम :<br/><br/>
 1. दोन अटॅच टॉयलेट & बाथरूम<br/>
 2. दोन सध्या रूम </td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>4.</td>
                      <td>व्ही. आय. पी डायनिगं हॉल</td>
                      <td>1</td>
                    </tr><tr >
                      <td>5.</td>
                      <td>स्वयंपाकचे भांडे</td>
                      <td>1,200 लोकांचे </td>
                    </tr>
                    <tr >
                      <td>6.</td>
                      <td>जेवण्या साठी प्लेट आणि वाटी  </td>
                      <td>1,000</td>
                    </tr>
                    <tr >
                      <td>7.</td>
                      <td>लग्नाचा खर्ची  :<br/><br/>
 1. 300 हॅंडल वाले<br/>
 2. 700 बिगर हॅंडल <br/></td>
                      <td>800 </td>
                    </tr>
                    <tr >
                      <td>8.</td>
                      <td>खर्ची कव्हर </td>
                      <td>800</td>
                    </tr>
                    <tr >
                      <td>9.</td>
                      <td>लग्नाचा सोफा </td>
                      <td>1</td>
                    </tr>
                    
                   
                    <tr >
                      <td>10.</td>
                      <td>साऊं ड सिस्टम<br/><br/>
 1. Amplifier<br/>
 2. स्पीकर<br/>
 3. माइक<br/>
 4. mixer <br/>
</td>
                      <td>1</td>
                    </tr><tr >
                      <td>11.</td>
                      <td>रुखवत स्टेज</td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>12.</td>
                      <td>गायन स्टेज  </td>
                      <td>1 </td>
                    </tr>
                    
                    <tr >
                      <td>13.</td>
                      <td>फोटो स्टेज  </td>
                      <td>1</td>
                    </tr>
                    
                    <tr >
                      <td>14.</td>
                      <td>मैन गेट बॅनर  <br/><br/>
                      1. [ 2 x 6 ]</td>
                      <td>1</td>
                    </tr>
                      <td>15.</td>
                      <td>जनरेटर ( डिझले सोडून)</td>
                      <td>1</td>
                   
                    <tr >
                      <td>16.</td>
                      <td>डायनिगं हॉल टेबल </td>
                      <td>100</td>
                    </tr>
                    <tr >
                      <td>17.</td>
                      <td>डायनिगं हॉल खुर्ची  ( </td>
                      <td>300</td>
                    </tr>
                    <tr >
                      <td>18.</td>
                      <td>डायनिगं हॉल एयर कूलिगं संहित </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>19.</td>
                      <td>फोटो स्टँड:<br/><br/>
1. दोन [4 x 6 ]<br/>
2. दोन [3 x 4 ]<br/></td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>20.</td>
                      <td>वाचमन  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>21.</td>
                      <td>कुंडे   </td>
                      <td>10 </td>
                    </tr>
                    <tr >
                      <td>22.</td>
                      <td>बोगदा</td>
                      <td>1  [ पांढर ]</td>
                    </tr>
                   
                    <tr >
                      <td>24.</td>
                      <td>गादी </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>25.</td>
                      <td>लोड </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>26.</td>
                      <td>स्टेज  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>27.</td>
                      <td>कोल्ड फायर</td>
                      <td>5 </td>
                    </tr>
                    <tr >
                      <td>28.</td>
                      <td>वऱ्हाडी साठी वेगळ बाथरूम </td>
                      <td>10</td>
                    </tr>
                </tbody>
              </table>
              
            )}

            
            {packageOption === 'Platinum' && <div className="package-total" style={{ textAlign: 'right' }}><hr/><h3>Package Total: Rs.1,14,200</h3><hr/> </div>}
            <div className='table1'>
            {packageOption === 'Platinum' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <input className='input12'
                          type="number"
                          min="0"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e)}
                        />
                      </td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            </div>
            {packageOption === 'Standard' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>quantity</th>
                    
                  </tr>
                </thead>
                <tbody>
                 
                <tr>
      <td>1.</td>
      <td>एसी लग्न हॉल</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>लग्न हॉल खुर्ची</td>
      <td>400</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>स्वयंपाकाचे भांडे</td>
      <td>700</td>
    </tr>
    <tr>
      <td>4.</td>
      <td>जेवण प्लेट</td>
      <td>600</td>
    </tr>
    <tr>
      <td>5.</td>
      <td>वाटी</td>
      <td>600</td>
    </tr>
    <tr>
      <td>6.</td>
      <td>समोरच्या गादी</td>
      <td>20</td>
    </tr>
    <tr>
      <td>7.</td>
      <td>वर-वधू रूम</td>
      <td>2</td>
    </tr>
    <tr>
      <td>8.</td>
      <td>लिविंग रूम</td>
      <td>4</td>
    </tr>
    <tr>
      <td>9.</td>
      <td>वी.आयपी.हॉल</td>
      <td>1</td>
    </tr>
    <tr>
      <td>10.</td>
      <td>सोफा</td>
      <td>1</td>
    </tr>
    <tr>
      <td>11.</td>
      <td>साऊंड सिस्टम</td>
      <td>2</td>
    </tr>
    <tr>
      <td>12.</td>
      <td>रुकवत स्टेज</td>
      <td>1</td>
    </tr>
    <tr>
      <td>13.</td>
      <td>मैन गेट बॅनर</td>
      <td>1</td>
    </tr>
    <tr>
      <td>14.</td>
      <td>गायन स्टेज</td>
      <td>1</td>
    </tr>
    <tr>
      <td>15.</td>
      <td>फोटो स्टेज</td>
      <td>1</td>
    </tr>
    <tr>
      <td>16.</td>
      <td>डायनिंग हॉल टेबल</td>
      <td>100</td>
    </tr>
    <tr>
      <td>17.</td>
      <td>डायनिंग हॉल खुर्ची</td>
      <td>300</td>
    </tr>
    <tr>
      <td>18.</td>
      <td>वाचमन</td>
      <td>1</td>
    </tr>
    <tr>
      <td>19.</td>
      <td>कुंडे</td>
      <td>10</td>
    </tr>
    <tr>
      <td>20.</td>
      <td>बोगदा</td>
      <td>1 [ पिवळा ]</td>
    </tr>
    <tr>
      <td>21.</td>
      <td>गणपती डेकोरेशन</td>
      <td>1</td>
    </tr>
    <tr>
      <td>22.</td>
      <td>गादी</td>
      <td>20</td>
    </tr>
    <tr>
      <td>23.</td>
      <td>स्टेज</td>
      <td>1</td>
    </tr>
    <tr>
      <td>24.</td>
      <td>वऱ्हाडी साठी वेगळ बाथरूम</td>
      <td>6</td>
    </tr>
                </tbody>
              </table>
              
            )}
            {packageOption === 'Standard' && <div className="package-total" style={{ textAlign: 'right' }}><hr/><h3>Package Total: Rs.92,900</h3><hr/></div>}
            {packageOption === 'Standard' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <input className='input12'
                          type="number"
                          min="0"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e)}
                        />
                      </td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            )}
            
           
            
            {packageOption === 'Custom' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <input className='input12'
                          type="number"
                          min="0"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e)}
                        />
                      </td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            )}
          


          

            
          </div>
          
          
          <div className="invoice-total">
            <h3>Total Price: Rs.{totalPrice}</h3>
            <hr />
            <h3>Grand Total: Rs.{grandTotal}</h3>
            <hr/>
            <button className="view" onClick={toggleView}>
              View Invoice
            </button>
          </div>
        </div>
      ) : (
        <div className="bill-container">
          <div className="bill-header">
          
            <img src={logo} alt="Logo" className="bill-logo" />
           
            <div className="bill-header-text">
            <input type="date" value={date} onChange={handleDateChange} />
              <h3>Aditi mangal karyalay</h3>
              <p>Pankaj Kulkarni - 9604478076</p>
              <p>At Post Nitur, Tq Nilanga, Dist Latur-413530</p>
            </div>
            
          </div>
          <hr />
          <div className="bill-customer-info">
            <label className="custom-label1">Name:</label>
            <span className="custom-label1">{name}</span>
            <p></p>
            <label className="custom-label1"> Mobile No.:</label>
            <span className="custom-label1">{mobile}</span>
          </div>
          <hr />
          <div className="bill-items">
          {packageOption === 'Standard' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>quantity</th>
                    
                  </tr>
                </thead>
                <tbody>
                 
                    <tr >
                      <td>1.</td>
                      <td>एसी लग्न हॉल </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>2.</td>
                      <td>लग्न हॉल खुर्ची </td>
                      <td>400</td>
                    </tr>
                    <tr >
                      <td>3.</td>
                      <td>स्वयंपाकाचे भांडे</td>
                      <td>700</td>
                    </tr>
                    <tr >
                      <td>4.</td>
                      <td>जेवण प्लेट</td>
                      <td>600</td>
                    </tr><tr >
                      <td>5.</td>
                      <td>वाटी</td>
                      <td>600</td>
                    </tr>
                    <tr >
                      <td>6.</td>
                      <td>समोरच्या गादी  </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>7.</td>
                      <td>वर-वधू रूम </td>
                      <td>2 </td>
                    </tr>
                    <tr >
                      <td>8.</td>
                      <td>लिविंग रूम </td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>9.</td>
                      <td>वी.आयपी.हॉल </td>
                      <td>1</td>
                    </tr>
                    
                   
                    <tr >
                      <td>10.</td>
                      <td>सोफा</td>
                      <td>1</td>
                    </tr><tr >
                      <td>11.</td>
                      <td>साऊंड सिस्टम</td>
                      <td>2</td>
                    </tr>
                    <tr >
                      <td>12.</td>
                      <td>रुकवत स्टेज </td>
                      <td>1 </td>
                    </tr><tr >
                      <td>13.</td>
                      <td>मैन गेट बॅनर </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>14.</td>
                      <td>गायन स्टेज</td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>15.</td>
                      <td>फोटो स्टेज </td>
                      <td>1</td>
                    </tr>
                </tbody>
              </table>
              
            )}
            {packageOption === 'Standard' && <div className="package-total" style={{ textAlign: 'right' }}><hr/><h3>Package Total: Rs.55,000</h3><hr/></div>}
            {packageOption === 'Premium' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>quantity</th>
                    
                  </tr>
                </thead>
                <tbody>
                <tr >
                      <td>1.</td>
                      <td>एयर कूलिगं हॉल  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>2.</td>
                      <td> वर-वधूरूम अडँ अटॅच बाथरूम</td>
                      <td>2</td>
                    </tr>
                    <tr >
                      <td>3.</td>
                      <td>वऱ्हाडी साठी रूम :<br/><br/>
 1. दोन अटॅच टॉयलेट & बाथरूम<br/>
 2. दोन सध्या रूम </td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>4.</td>
                      <td>व्ही. आय. पी डायनिगं हॉल</td>
                      <td>1</td>
                    </tr><tr >
                      <td>5.</td>
                      <td>स्वयंपाकचे भांडे</td>
                      <td>1,500 लोकांचे </td>
                    </tr>
                    <tr >
                      <td>6.</td>
                      <td>जेवण्या साठी प्लेट आणि वाटी  </td>
                      <td>1,500</td>
                    </tr>
                    <tr >
                      <td>7.</td>
                      <td>लग्नाचा खर्ची  :<br/><br/>
 1. 300 हॅंडल वाले<br/>
 2. 700 बिगर हॅंडल <br/></td>
                      <td>1,000 </td>
                    </tr>
                    <tr >
                      <td>8.</td>
                      <td>खर्ची कव्हर </td>
                      <td>1,000</td>
                    </tr>
                    <tr >
                      <td>9.</td>
                      <td>लग्नाचा सोफा </td>
                      <td>1</td>
                    </tr>
                    
                   
                    <tr >
                      <td>10.</td>
                      <td>साऊं ड सिस्टम<br/><br/>
 1. Amplifier<br/>
 2. स्पीकर<br/>
 3. माइक<br/>
 4. mixer <br/>
</td>
                      <td>1</td>
                    </tr><tr >
                      <td>11.</td>
                      <td>रुखवत स्टेज</td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>12.</td>
                      <td>गायन स्टेज  </td>
                      <td>1 </td>
                    </tr>
                    
                    <tr >
                      <td>13.</td>
                      <td>फोटो स्टेज  </td>
                      <td>1</td>
                    </tr>
                    
                    <tr >
                      <td>14.</td>
                      <td>मैन गेट बॅनर  <br/><br/>
                      1. [ 2 x 6 ]</td>
                      <td>1</td>
                    </tr>
                      <td>15.</td>
                      <td>जनरेटर ( डिझले सोडून)</td>
                      <td>1</td>
                   
                    <tr >
                      <td>16.</td>
                      <td>डायनिगं हॉल टेबल ( फ्रिल सहित ) </td>
                      <td>100</td>
                    </tr>
                    <tr >
                      <td>17.</td>
                      <td>डायनिगं हॉल खर्ची ु ( कव्हार सहित ) </td>
                      <td>300</td>
                    </tr>
                    <tr >
                      <td>18.</td>
                      <td>डायनिगं हॉल एयर कूलिगं संहित </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>19.</td>
                      <td>फोटो स्टँड:<br/><br/>
1. दोन [4 x 6 ]<br/>
2. दोन [3 x 4 ]<br/></td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>20.</td>
                      <td>वाचमन  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>21.</td>
                      <td>कुंडे   </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>22.</td>
                      <td>बोगदा</td>
                      <td>1  [ पांढर ]</td>
                    </tr>
                    <tr >
                      <td>23.</td>
                      <td>गणपती डेकोरेशन  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>24.</td>
                      <td>गादी </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>25.</td>
                      <td>लोड </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>26.</td>
                      <td>स्टेज प्रीमियम  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>27.</td>
                      <td>कोल्ड फायर</td>
                      <td>6</td>
                    </tr>
                    <tr >
                      <td>28.</td>
                      <td>वऱ्हाडी साठी वेगळ बाथरूम </td>
                      <td>10</td>
                    </tr>
                </tbody>
              </table>
              
            )}
            {packageOption === 'Premium' && <div className="package-total" style={{ textAlign: 'right' }}><hr/><h3>Package Total: ₹ 1,36,700</h3><hr/></div>}
            {packageOption === 'Platinum' && (
              <table>
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>quantity</th>
                    
                  </tr>
                </thead>
                <tbody>
                  
                <tr >
                      <td>1.</td>
                      <td>एयर कूलिगं हॉल  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>2.</td>
                      <td> वर-वधूरूम अडँ अटॅच बाथरूम</td>
                      <td>2</td>
                    </tr>
                    <tr >
                      <td>3.</td>
                      <td>वऱ्हाडी साठी रूम :<br/><br/>
 1. दोन अटॅच टॉयलेट & बाथरूम<br/>
 2. दोन सध्या रूम </td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>4.</td>
                      <td>व्ही. आय. पी डायनिगं हॉल</td>
                      <td>1</td>
                    </tr><tr >
                      <td>5.</td>
                      <td>स्वयंपाकचे भांडे</td>
                      <td>1,200 लोकांचे </td>
                    </tr>
                    <tr >
                      <td>6.</td>
                      <td>जेवण्या साठी प्लेट आणि वाटी  </td>
                      <td>1,000</td>
                    </tr>
                    <tr >
                      <td>7.</td>
                      <td>लग्नाचा खर्ची  :<br/><br/>
 1. 300 हॅंडल वाले<br/>
 2. 700 बिगर हॅंडल <br/></td>
                      <td>800 </td>
                    </tr>
                    <tr >
                      <td>8.</td>
                      <td>खर्ची कव्हर </td>
                      <td>800</td>
                    </tr>
                    <tr >
                      <td>9.</td>
                      <td>लग्नाचा सोफा </td>
                      <td>1</td>
                    </tr>
                    
                   
                    <tr >
                      <td>10.</td>
                      <td>साऊं ड सिस्टम<br/><br/>
 1. Amplifier<br/>
 2. स्पीकर<br/>
 3. माइक<br/>
 4. mixer <br/>
</td>
                      <td>1</td>
                    </tr><tr >
                      <td>11.</td>
                      <td>रुखवत स्टेज</td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>12.</td>
                      <td>गायन स्टेज  </td>
                      <td>1 </td>
                    </tr>
                    
                    <tr >
                      <td>13.</td>
                      <td>फोटो स्टेज  </td>
                      <td>1</td>
                    </tr>
                    
                    <tr >
                      <td>14.</td>
                      <td>मैन गेट बॅनर  <br/><br/>
                      1. [ 2 x 6 ]</td>
                      <td>1</td>
                    </tr>
                      <td>15.</td>
                      <td>जनरेटर ( डिझले सोडून)</td>
                      <td>1</td>
                   
                    <tr >
                      <td>16.</td>
                      <td>डायनिगं हॉल टेबल </td>
                      <td>100</td>
                    </tr>
                    <tr >
                      <td>17.</td>
                      <td>डायनिगं हॉल खुर्ची  ( </td>
                      <td>300</td>
                    </tr>
                    <tr >
                      <td>18.</td>
                      <td>डायनिगं हॉल एयर कूलिगं संहित </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>19.</td>
                      <td>फोटो स्टँड:<br/><br/>
1. दोन [4 x 6 ]<br/>
2. दोन [3 x 4 ]<br/></td>
                      <td>4</td>
                    </tr>
                    <tr >
                      <td>20.</td>
                      <td>वाचमन  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>21.</td>
                      <td>कुंडे   </td>
                      <td>10 </td>
                    </tr>
                    <tr >
                      <td>22.</td>
                      <td>बोगदा</td>
                      <td>1  [ पांढर ]</td>
                    </tr>
                   
                    <tr >
                      <td>24.</td>
                      <td>गादी </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>25.</td>
                      <td>लोड </td>
                      <td>20</td>
                    </tr>
                    <tr >
                      <td>26.</td>
                      <td>स्टेज  </td>
                      <td>1</td>
                    </tr>
                    <tr >
                      <td>27.</td>
                      <td>कोल्ड फायर</td>
                      <td>5 </td>
                    </tr>
                    <tr >
                      <td>28.</td>
                      <td>वऱ्हाडी साठी वेगळ बाथरूम </td>
                      <td>10</td>
                    </tr>
                </tbody>
              </table>
              
            )}
            
            
            {packageOption === 'Platinum' && <div className="package-total" style={{ textAlign: 'right' }}><hr/><h3>Package Total: Rs.1,14,200</h3><hr/> </div>}
            
            <table>
              <thead>
                <tr>
                  <th>Item No.</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items
                  .filter((item) => item.quantity !== 0)
                  .map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="bill-total">
            <p>Total Price: Rs.{totalPrice}</p>
            <hr />
               <div className="invoice-extras">
  <table>
    <tbody>
      <tr>
        <td><label>Light Bill:</label></td>
        <td><input type="number" value={lightBill} onChange={handleLightBillChange} /></td>
      </tr>
      <tr>
        <td><label>Discount:</label></td>
        <td><input type="number" value={discount} onChange={handleDiscountChange} /></td>
      </tr>
    </tbody>
  </table>
</div>
            <p style={{ fontSize: '18px', fontWeight: 'bold', textDecoration: 'underline' }}>
  Grand Total: Rs. {grandTotal}
</p>

            <button onClick={printBill}>Print</button>
            <button onClick={goBack} className="back-button">
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
