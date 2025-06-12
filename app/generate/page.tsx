"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GeneratePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    theme: "",
    target: "",
    duration: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.theme || !formData.target || !formData.duration) {
      alert("すべての項目を入力してください")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const params = new URLSearchParams(formData)
      router.push(`/result?${params.toString()}`)
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">台本を生成中...</h2>
            <p className="text-gray-600 text-sm mb-4">AIが最適な構成を考えています</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full animate-pulse"
                style={{ width: "70%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">あと数秒で完了します</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pt-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">台本を生成</h1>
        </div>

        {/* Form Card */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-pink-500" />
              台本の設定
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Theme Input */}
              <div className="space-y-2">
                <Label htmlFor="theme" className="text-sm font-medium">
                  テーマ <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="theme"
                  placeholder="例: 5kg痩せる朝習慣"
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="min-h-[80px] resize-none"
                />
                <p className="text-xs text-gray-500">動画で伝えたい内容を具体的に入力してください</p>
              </div>

              {/* Target Audience */}
              <div className="space-y-2">
                <Label htmlFor="target" className="text-sm font-medium">
                  ターゲット視聴者 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="target"
                  placeholder="例: 20代女性"
                  value={formData.target}
                  onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                />
                <p className="text-xs text-gray-500">誰に向けた動画かを明確にしてください</p>
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-medium">
                  想定尺 <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.duration}
                  onValueChange={(value) => setFormData({ ...formData, duration: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="動画の長さを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15秒</SelectItem>
                    <SelectItem value="30">30秒</SelectItem>
                    <SelectItem value="60">60秒</SelectItem>
                    <SelectItem value="90">90秒</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">短い動画ほどバズりやすい傾向があります</p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-6 text-lg"
                disabled={!formData.theme || !formData.target || !formData.duration}
              >
                台本を生成する
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-medium text-sm text-blue-900 mb-2">💡 バズるコツ</h3>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• 最初の3秒で視聴者の注意を引く</li>
              <li>• 具体的な数字を使う（例: 5kg、3日間）</li>
              <li>• 感情に訴えかける表現を使う</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
