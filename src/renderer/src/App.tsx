import { Card, Col, Row, Typography } from 'antd'

function App(): React.JSX.Element {
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={3}>Desktop Productivity Hub</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Quick Launcher">
            快速启动器：全局快捷键呼出，搜索并启动本地应用、常用网站，支持简单命令与最近使用记录。
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Clipboard Manager">
            剪贴板管理：自动记录文本剪贴板历史，支持搜索、收藏与一键复制回系统剪贴板。
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Settings">
            基础设置：全局快捷键、开机启动、剪贴板历史数量、启动器行为与主题。
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default App
