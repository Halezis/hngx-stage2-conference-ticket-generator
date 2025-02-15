import { useState } from 'react'
import Header from './Components/Header'
import Tickets from './Components/Tickets'
import Form from './Components/Form'
import TicketDisplay from './Components/TicketDisplay'

export default function App() {
  const [currentStep, setCurrentStep] = useState('tickets')
  const [ticketData, setTicketData] = useState(null)

  const handleNext = (info) => {
    setTicketData(info)
    setCurrentStep('form')
  }

  // Handle "Book Another Ticket" button click
  const handleBookAnother = () => {
    setCurrentStep('tickets')
  }

  // Download handle
  const handleDownload = () => {
    alert('Downloading ticket...')
  }

  return (
    <div className="bg-mainbg flex flex-col min-h-screen">
      <Header />

      <main className="flex justify-center items-center">
        {currentStep === 'tickets' && (
          <Tickets onNext={(info) => setCurrentStep('form')} />
        )}

        {currentStep === 'form' && (
          <Form
            ticketInfo={ticketData}
            onBack={() => setCurrentStep('tickets')}
            onSubmitSuccess={(data) => {
              setTicketData(data)
              setCurrentStep('ticket')
            }}
          />
        )}

        {currentStep === 'ticket' && (
          <TicketDisplay
            ticket={ticketData}
            onBookAnother={handleBookAnother}
            onDownload={handleDownload}
          />
        )}
      </main>
    </div>
  )
}
