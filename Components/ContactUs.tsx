import Send from "../styles/Send.png"
import DropdownButton from "./dropdown"
import { createClient } from "@supabase/supabase-js"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "react-feather"

const supabase = createClient(
  "https://efgydhkgkdfuuzfnitkm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZ3lkaGtna2RmdXV6Zm5pdGttIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODUwMDk2NiwiZXhwIjoyMDE0MDc2OTY2fQ.hrWjJNr6oPEO0O7hwbLM5KIk47pTPNE84pvSwkrHKy8"
)

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  })
  const [submitStatus, setSubmitStatus] = useState("")
  // const [submittedData, setSubmittedData] = useState([])
  const [resetDropdown, setResetDropdown] = useState(false)

  useEffect(() => {
    async function fetchSubmittedData() {
      const { data, error } = await supabase.from("contact_form").select("*")
      if (error) {
        console.error("Error fetching data:", error)
      } else {
        // setSubmittedData(data || [])
        console.log("Data fetched from Supabase:", data)
      }
    }

    fetchSubmittedData()
  }, [])

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      services: "",
      message: "",
    })
    setSubmitStatus("")
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { name, email, services, message } = formData

    if (!name || !email || !services || !message) {
      setSubmitStatus("Please fill in all the required fields.")
    } else {
      // Insert the data into the Supabase table
      const { error } = await supabase.from("contact_form").upsert([
        {
          name,
          email,
          services,
          message,
        },
      ])

      if (error) {
        setSubmitStatus("Error submitting data. Please try again.")
      } else {
        setShowModal(true)
      }
    }
  }

  const handleServiceSelected = (option) => {
    setFormData({ ...formData, services: option })
    if (option.trim() !== "") {
      setSubmitStatus("")
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }))
    if (value.trim() === "") {
      setSubmitStatus("Please fill in all the required fields.")
    } else {
      setSubmitStatus("")
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col space-y-6 overflow-hidden rounded-xl bg-cyan-700 p-8 text-white shadow-lg sm:p-12 md:flex-row md:space-x-6 md:space-y-0">
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
            <p className="text-md pt-2 text-cyan-100">
              We are here to assist you. Reach out to us with any questions or
              inquiries.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2">
              <Phone size={20} className="text-xl text-teal-300" />
              <span>(+92) 3052574467 </span>
              <span>(+92) 3002471540</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <Mail size={20} className="text-xl text-teal-300" />
              <span>tritechbposolutions@gmail.com</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <MapPin size={20} className="text-xl text-teal-300" />
              <span>
                Plot LSB ST4, Block 10 Gulshan-e-Iqbal,Karachi City,Sindh
              </span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="">
              <Facebook size={20} />
            </a>
            <a href="">
              <Instagram size={20} />
            </a>
            <a href="">
              <Twitter size={20} />
            </a>
            <a href="">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-28 -top-28 z-0 h-40 w-40 rounded-full bg-teal-300"></div>
          <div className="absolute -bottom-16 -left-28 z-0 h-40 w-40 rounded-full bg-teal-300"></div>
          <div className="relative z-10 rounded-xl bg-white p-8 text-gray-600 shadow-lg md:w-80">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-2 w-full transform rounded-3xl px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 w-full transform rounded-3xl px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <DropdownButton
                  onOptionSelected={handleServiceSelected}
                  reset={resetDropdown}
                />
              </div>
              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2 w-full transform rounded-3xl px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="inline-block transform self-end rounded-3xl bg-cyan-700 px-6 py-2 text-base uppercase text-white hover:bg-cyan-800"
              >
                Send Message
              </button>
              {submitStatus && (
                <div className="text-center text-red-500">{submitStatus}</div>
              )}
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
          <div className="z-60 flex h-auto w-72 flex-col items-center justify-center rounded-lg bg-white p-2 shadow-xl">
            <Image
              src={Send}
              width={100}
              height={100}
              objectFit="contain"
              alt="Sent Message Image"
            />
            <h2 className="mx-4 mt-2 text-center text-base font-semibold text-gray-400">
              Message Sent Successfully
            </h2>
            <button
              className="my-5 h-10 w-auto rounded-md bg-blue-600 px-8 font-semibold text-white shadow hover:shadow-lg"
              onClick={() => {
                setShowModal(false)
                resetForm()
                setResetDropdown(true)
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactUs
