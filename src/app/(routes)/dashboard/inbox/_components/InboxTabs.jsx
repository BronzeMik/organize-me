import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {CurrentEmailContext} from '../../../../../contexts/CurrentEmailProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { addAuthEmail } from '@/src/lib/api';
import { PlusCircle } from 'lucide-react';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InboxTabs({children}) {
  const [value, setValue] = React.useState(0);
  const authEmails = [
    {
      email: 'mikaila.brown2022@gmail.com',
      grantId: '60f5b664-c390-46f0-9609-2cb66a7f681b'
    },
    {
        email: 'mikaila.brown2023@gmail.com',
        grantId: 'bdf02800-9ab1-4655-82da-3d9bede9d2de'
    }
  ];
  const {setCurrentEmail} = useContext(CurrentEmailContext);
  
  useEffect(() => {
    setCurrentEmail(authEmails[value])
  }, [])
  
const handleChange = (event, newValue) => {
    setCurrentEmail(authEmails[newValue])
    setValue(newValue);
    
  };


  return (
    
        <Box sx={{ width: '95%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {authEmails.map((email, index) => (
                    <Tab key={index} label={email.email} {...a11yProps(index)} />
                ))}
                {authEmails.length <= 5 &&  <a className='flex justify-between items-center' target='_blank' href='http://localhost:3001/api/emails/nylas/auth'>ADD EMAIL <PlusCircle /></a>}
                
                </Tabs>
            </Box>
            
            {authEmails.map((email, index) => (
                    <CustomTabPanel key={index} value={value} index={index}>
                    {children}
                    </CustomTabPanel>
                ))}
        </Box>
    
  );
}
