interface ClientLog {
  level: 'ERROR' | 'WARN' | 'INFO';
  message: string;
  client_id: string;
  user_id: string;
  company_id: string;
}

export const logClientError = (error: Error) => {
  const logData: ClientLog = {
    level: 'ERROR',
    message: error.message,
    client_id: 'CLIENT-001',
    user_id: 'USR-001',
    company_id: 'COMPANY-001'
  };

  sendLogDataToServer(logData);
}

export const logClientWarning = (message: string) => {
  const logData: ClientLog = {
    level: 'WARN',
    message: message,
    client_id: 'CLIENT-001',
    user_id: 'USR-001',
    company_id: 'COMPANY-001'
  };

  sendLogDataToServer(logData);
}

export const logClientInfo = (message: string) => {
  const logData: ClientLog = {
    level: 'INFO',
    message: message,
    client_id: 'CLIENT-001',
    user_id: 'USR-001',
    company_id: 'COMPANY-001'
  };

  sendLogDataToServer(logData);
}

const sendLogDataToServer = async (logData: ClientLog) => {
  await fetch('http://localhost:8080/api/v1/encoder/clientLog', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(logData)
  }).catch(console.error);
}