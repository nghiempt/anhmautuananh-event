"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"
import Program from "./program"
import { Service } from "./service"
import Cookies from 'js-cookie'
import Event from "./event"
import { useToast } from "@/hooks/use-toast"

export default function HomeClient() {

  const { toast } = useToast()

  const accountCookie = JSON.parse(Cookies.get('account') || '{}')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(true)
  const [loading, setLoading] = useState(true)

  const [listAccount, setListAccount] = useState([] as any)
  const [listNumber, setListNumber] = useState([] as any)

  const init = async () => {
    const listAccount = await getAllAccounts()
    const listNumber = await getAllNumbers()
    setListAccount(listAccount)
    setListNumber(listNumber)
    setLoading(false)
  }

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getAllAccounts = async () => {
    const result = await Service.getAllAccounts()
    return result
  }

  const getAllNumbers = async () => {
    const result = await Service.getAllNumbers()
    return result
  }

  const getCurrentAccount = () => {
    let result: any = null
    const account = listAccount?.find((item: any) => item.MA_KHACH_HANG === accountCookie?.MA_KHACH_HANG)
    if (account) {
      result = account
    }
    return result
  }

  const handleLogin = async () => {
    setLoading(true)
    const account = listAccount?.find((item: any) => item.TAI_KHOAN === username && item.MAT_KHAU === password)
    if (account) {
      Cookies.set('account', JSON.stringify(account), { expires: 7 });
      setTimeout(() => {
        setLoading(false)
      }, 500)
    } else {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Tài khoản hoặc mật khẩu không đúng"
      })
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    Cookies.remove('account')
    window.location.reload()
  }

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div role="status" className="ml-4">
          <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {
        accountCookie?.MA_KHACH_HANG
          ?
          <Event handleLogout={handleLogout} currentAccount={getCurrentAccount} listNumber={listNumber} />
          :
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center p-6 bg-gradient-to-t from-red-900 via-red-700 to-red-800">
              <Card className="w-full md:w-2/3 lg:w-1/3">
                <CardHeader>
                  <div className="w-full flex justify-center items-center">
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={160}
                      height={0}
                      priority
                    />
                  </div>
                  <CardDescription>
                    <div className="w-full flex flex-col justify-center items-center text-center mt-4 gap-2">
                      <span>Chương trình xổ số trúng trưởng nhân dịp <strong>TẾT NGUYÊN ĐÁN 2025</strong></span>
                      <span>Liên hệ sdt <strong>0941 82 6556</strong> (Mr.Thức) để lấy tài khoản đăng nhập</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="username">Tài khoản</Label>
                      <div className="flex justify-center items-center rounded-md border border-gray-300 bg-background">
                        <Input
                          id="username"
                          type="text"
                          placeholder=""
                          required
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Mật khẩu</Label>
                      </div>
                      <div className="flex justify-center items-center rounded-md border border-gray-300 bg-background pr-3">
                        <Input
                          id="password"
                          type={isShowPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {
                          isShowPassword
                            ?
                            <Eye
                              className="w-5 h-5 text-slate-600 cursor-pointer"
                              onClick={() => setIsShowPassword(false)}
                            />
                            :
                            <EyeOff
                              className="w-5 h-5 text-slate-600 cursor-pointer"
                              onClick={() => setIsShowPassword(true)}
                            />
                        }
                      </div>
                    </div>
                    <Button type="submit" className="w-full" onClick={handleLogin}>
                      Đăng nhập
                      {/* {
                        loading && (
                          <div role="status" className="ml-4">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                          </div>
                        )
                      } */}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Program />
          </div>
      }
    </div>
  )
}