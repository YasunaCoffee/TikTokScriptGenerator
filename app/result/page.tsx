"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Copy, RotateCcw, Check } from "lucide-react"
import Link from "next/link"

function ResultContent() {
  const searchParams = useSearchParams()
  const [copied, setCopied] = useState(false)
  const [script, setScript] = useState("")

  const theme = searchParams.get("theme") || ""
  const target = searchParams.get("target") || ""
  const duration = searchParams.get("duration") || ""

  useEffect(() => {
    // Simulate script generation
    const generateScript = () => {
      const scripts = {
        "5kg痩せる朝習慣": {
          title: "朝の5分で人生変わる痩せ習慣",
          hook: "朝起きてすぐにやるだけで、1ヶ月で5kg痩せた方法を教えます！",
          main: "①白湯を500ml飲む ②5分間のストレッチ ③プロテインを摂取。この3つを毎朝続けるだけで代謝がアップし、自然と痩せ体質に変わります。",
          conclusion: "継続は力なり！明日の朝から始めてみてください。コメントで結果を教えてね！",
          bgm: "アップテンポなポップス",
          estimatedTime: duration,
        },
      }

      const defaultScript = {
        title: `${theme}の完全攻略法`,
        hook: `${target}必見！${theme}について、知らないと損する情報をお伝えします！`,
        main: `実際に効果があった方法を3つご紹介。①基本的な準備 ②実践のコツ ③継続する秘訣。この順番で進めることで、確実に結果が出ます。`,
        conclusion: `今日から実践して、理想の自分に近づきましょう！質問があればコメントでお聞かせください。`,
        bgm: "明るく前向きなBGM",
        estimatedTime: duration,
      }

      return scripts[theme as keyof typeof scripts] || defaultScript
    }

    const generatedScript = generateScript()
    const fullScript = `【タイトル】${generatedScript.title}

導入（フック）：
${generatedScript.hook}

本編：
${generatedScript.main}

結論：
${generatedScript.conclusion}

推奨BGM：${generatedScript.bgm}
想定再生時間：${generatedScript.estimatedTime}秒`

    setScript(fullScript)
  }, [theme, target, duration])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pt-4">
          <Link href="/generate">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">生成完了</h1>
        </div>

        {/* Success Message */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-green-800 font-medium text-sm">台本の生成が完了しました！</p>
          </CardContent>
        </Card>

        {/* Script Display */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-lg">生成された台本</CardTitle>
            <div className="flex gap-2 text-xs">
              <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded">テーマ: {theme}</span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">{target}</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{duration}秒</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">{script}</pre>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleCopy}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium"
                disabled={copied}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    コピー完了！
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    台本をコピー
                  </>
                )}
              </Button>

              <Link href="/generate" className="block">
                <Button variant="outline" className="w-full">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  もう一度作成
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <h3 className="font-medium text-sm text-yellow-900 mb-2">📱 撮影のコツ</h3>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>• 縦向きで撮影（9:16の比率）</li>
              <li>• 明るい場所で撮影する</li>
              <li>• 最初の3秒で視聴者を引きつける</li>
              <li>• 字幕やテロップを効果的に使う</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full"></div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  )
}
