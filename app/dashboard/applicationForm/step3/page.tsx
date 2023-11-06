'use client'
import Loading from '@/components/loading'
import { DashboardRoutes } from '@/enums/routes'
import { LocalStorageKeys, getData, updateData } from '@/utils/localStorage'
import { Button, Input, OutlinedInput } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useEffect } from 'react'
import { useState } from 'react'
import { IMaskInput } from 'react-imask'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    )
  },
)

export default function Step3() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [id, setId] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const results = getData(LocalStorageKeys.APPLICATION_DATA)
    if (!results?.id) {
      alert('Missing first data, navigating back to step 1')
      router.push(DashboardRoutes.STEP1)
    }
    setId(results.id)
    setPhoneNumber(results?.phoneNumber)
  }, [])

  function updatePhoneNumber(event: ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(event.target.value)
  }

  async function nextStep() {
    await submitData()
    updateData(LocalStorageKeys.APPLICATION_DATA, { phoneNumber })
    router.push(`${DashboardRoutes.REVIEW}`)
  }

  async function submitData() {
    setIsLoading(true)
    try {
      const body = {
        id,
        phoneNumber,
      }
      await fetch(`/api/application`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex flex-col w-full">
      <Loading isLoading={isLoading} />
      <h1>Enter your phone number</h1>
      <div className="flex flex-col">
        <OutlinedInput
          value={phoneNumber}
          onChange={updatePhoneNumber}
          name="textmask"
          inputComponent={TextMaskCustom as any}
        />
      </div>

      <br />
      <Button
        variant="contained"
        style={{ backgroundColor: '#1A76D2' }}
        onClick={nextStep}
      >
        Review
      </Button>
    </div>
  )
}
