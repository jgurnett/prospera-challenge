'use client'
import { DashboardRoutes } from '@/enums/routes'
import { LocalStorageKeys, removeData } from '@/utils/localStorage'
import { Button, Input } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent } from 'react'
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
  // useEffect(() => {
  //   const results = getData(LocalStorageKeys.MOVIE_DATA)
  //   if (!results?.id) {
  //     alert('Going back to step 1')
  //     router.push(DashboardRoutes.STEP1)
  //   }
  //   setId(results.id)
  //   console.log(results)
  // }, [])

  const [phoneNumber, setPhoneNumber] = useState('')
  const [id, setId] = useState()
  const router = useRouter()

  function updatePhoneNumber(event: ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(event.target.value)
  }

  async function nextStep() {
    await submitData()
    removeData(LocalStorageKeys.MOVIE_DATA)
    router.push(`/${DashboardRoutes.DASHBOARD}/${DashboardRoutes.REVIEWS}`)
  }

  async function submitData() {
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
    }
  }
  return (
    <div>
      <h1>Enter your phone number</h1>
      <div>
        <Input
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
        Done
      </Button>
    </div>
  )
}
