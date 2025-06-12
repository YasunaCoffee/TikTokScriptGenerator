import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RotateCcw, Home } from "lucide-react"

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        {/* Error Card */}
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <CardTitle className="text-xl text-gray-900">エラーが発生しました</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-gray-600">台本の生成中に問題が発生しました。</p>
              <p className="text-sm text-gray-500">しばらく時間をおいてから再度お試しください。</p>
            </div>

            {/* Error Details */}
            <div className="bg-red-50 p-4 rounded-lg text-left">
              <h3 className="font-medium text-sm text-red-900 mb-2">考えられる原因：</h3>
              <ul className="text-xs text-red-700 space-y-1">
                <li>• ネットワーク接続の問題</li>
                <li>• サーバーの一時的な障害</li>
                <li>• 入力内容に問題がある可能性</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/generate" className="block">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  やり直す
                </Button>
              </Link>

              <Link href="/" className="block">
                <Button variant="outline" className="w-full">
                  <Home className="h-4 w-4 mr-2" />
                  トップページに戻る
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Support Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-blue-900 mb-2">問題が解決しない場合</p>
            <p className="text-xs text-blue-700">お手数ですが、入力内容を変更して再度お試しください。</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
