import React, { useState, useEffect } from 'react'
import cloudImage from '/src/assets/icon-cloud-download.png'
import envelope from '/src/assets/icon-envelope.png'

export default function Form({ ticketInfo, onBack, onSubmitSuccess }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [errors, setErrors] = useState({})
  const [uploading, setUploading] = useState(false)

  // This loads saved form data
  useEffect(() => {
    const savedFullName = localStorage.getItem('fullName')
    const savedEmail = localStorage.getItem('email')
    const savedAvatar = localStorage.getItem('avatar')
    const savedRequests = localStorage.getItem('specialRequests')

    if (savedFullName) setFullName(savedFullName)
    if (savedEmail) setEmail(savedEmail)
    if (savedAvatar) setAvatar(savedAvatar)
    if (savedRequests) setSpecialRequests(savedRequests)
  }, [])

  // saves form data to local storage
  useEffect(() => {
    localStorage.setItem('fullName', fullName)
    localStorage.setItem('email', email)
    localStorage.setItem('avatar', avatar)
    localStorage.setItem('specialRequests', specialRequests)
  }, [fullName, email, avatar, specialRequests])

  // uploads image to cloudinary
  const handleImageUpload = async (file) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'avatar_preset')
    formData.append('cloud_name', 'dgnlcanun')

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dgnlcanun/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()
      if (data.secure_url) {
        setAvatar(data.secure_url)
        URL
      } else {
        throw new Error('Image upload failed')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      setErrors({
        ...errors,
        avatar: 'Failed to upload image. Please try again.',
      })
    } finally {
      setUploading(false)
    }
  }

  // Validate form
  const validateForm = () => {
    let errors = {}

    if (!fullName.trim()) errors.fullName = 'Full Name is required.'
    if (!email.trim()) {
      errors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format.'
    }
    if (!avatar) {
      errors.avatar = 'Profile photo is required.'
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      const ticketData = {
        fullName,
        email,
        avatar,
        specialRequests,
        ...ticketInfo,
      }

      // Pass data to parent and resets form
      onSubmitSuccess(ticketData)
      resetForm()
    }
  }

  // Reset form fields and localStorage
  const resetForm = () => {
    setFullName('')
    setEmail('')
    setAvatar('')
    setSpecialRequests('')
    localStorage.removeItem('fullName')
    localStorage.removeItem('email')
    localStorage.removeItem('avatar')
    localStorage.removeItem('specialRequests')
  }

  return (
    <section className="bg-[#08252] border border-[#0E464F] rounded-[2rem] md:rounded-[2.5rem] mx-[1.25rem] mb-[1rem] p-[1.5rem] md:p-[3rem] flex flex-col justify-center items-start w-full md:w-[37.8rem]">
      <div className="flex items-start md:items-center w-full justify-between">
        <div className="font-jeju text-[1.5rem] md:text-[2rem] font-normal text-[#FFFFFF]">
          Attendee Details
        </div>
        <div className="font-roboto text-[1rem] text-[#FAFAFA] mt-2 md:mt-0">
          Step 2/3
        </div>
      </div>
      <div className="bg-[#0E464F] flex h-[0.25rem]   items-center self-stretch rounded-[0.3125] mt-[1rem]">
        <div className="bg-[#24A0B5] rounded-[0.3125] self-stretch w-[67%]"></div>
      </div>

      {/* Upload Section */}
      <div className="flex p-[1rem] md:p-[1.5rem] flex-col justify-center items-start gap-[2rem] mt-[2rem] md:border border-[#0E464F] rounded-[2rem] w-full bg-[#08252B] font-roboto text-[1rem] font-normal text-[#FAFAFA]">
        <div className="w-full flex flex-col items-start gap-[1rem] p-[1.5rem] pb-[3rem] border border-[#07373F] rounded-[1.5rem] bg-[#052228] ">
          <div className="">Upload Profile Photo</div>
          <div
            className="mx-auto w-[15rem] h-[15rem] p-[1.5rem] flex flex-col justify-center items-center gap-[1rem] border-[4px] rounded-[2rem] bg-[#0E464F] bg-cover bg-center"
            style={{
              borderColor: 'rgba(36, 160, 181, 0.50)',
              backgroundImage: avatar ? `url(${avatar})` : undefined,
            }}
          >
            {!avatar && (
              <div className="flex flex-col justify-center items-center">
                <img src={cloudImage} alt="cloudimage" />
                <p className="text-sm text[#FAFAFA]">
                  Drag & drop or click to upload
                </p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files[0] && handleImageUpload(e.target.files[0])
              }
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          {errors.avatar && (
            <p className="text-red-500 text-sm mt-2">{errors.avatar}</p>
          )}
        </div>

         <div className="bg-[#0E464F] flex h-[0.25rem] items-center self-stretch rounded-[0.3125] mt-[1rem]"></div>

        {/* Name Input */}
        <div className="w-full text-[#FAFAFA] font-roboto text-[0.875rem] leading-[1.3125rem] md:leading-[1.5rem">
          <label>
            Enter your name
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full bg-[#08252B] p-[0.75rem] border border-[#07373F] rounded-[0.75rem] "
            />
          </label>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email Input*/}
        <div className="w-full text-[#FAFAFA] font-roboto text-[0.875rem] leading-[1.3125rem] md:leading-[1.5rem">
          <label>
            Enter your email *
            <div className="relative">
              <img src={envelope} alt="" className='absolute left-3 top-1/2 transform -translate-y-1/2'/>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@avioflagos.io"
                className="pl-10 mt-1 block w-full bg-[#08252B] p-[0.75rem] border border-[#07373F] rounded-[0.75rem]"
              />

            </div>
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Special Requests */}
        <div className="w-full text-[#FAFAFA] font-roboto text-[0.875rem] leading-[1.3125rem] md:leading-[1.5rem">
          <label>
            Special request?
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="mt-1 block w-full bg-[#08252B] p-[0.75rem] border border-[#07373F] rounded-[0.75rem] h-32"
              placeholder="Textarea"
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-[0.5rem] md:gap-[2rem]">
          <button
            type="button"
            onClick={onBack}
            className="w-full px-[1.5rem] py-[0.75rem] bg-[#08252B] border border-[#24A0B5] rounded-[0.5rem] md:rounded-[0.75rem] text-[#0E464F] hover:bg-[#0E464F] hover:text-[#FFFFFF] hover:border-[#08252B] transition-all duration-200"
          >
            Back
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={uploading}
            className="w-full px-[1.5rem] py-[0.75rem] bg-[#24A0B5] border-0 rounded-[0.5rem] md:rounded-[0.75rem] text-[#FFFFFF] hover:bg-[#1C7F8F] hover:shadow-lg transition-all duration-200"
          >
            {uploading ? 'Uploading...' : 'Get My Ticket'}
          </button>
        </div>
      </div>
    </section>
  )
}
