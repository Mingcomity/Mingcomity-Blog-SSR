import { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'

import 'md-editor-rt/lib/style.css'
import MdEditor from '@/components/md-editor'
import {
  Button,
  Divider,
  Drawer,
  Flex,
  Form,
  Input,
  InputRef,
  Popover,
  Select,
  SelectProps,
  Space,
  Typography,
  Upload
} from 'antd'
import {
  ArticleIssueWrapper,
  IssueFormWrapper
} from '@/styles/home/datas/article/issue'
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const { Title } = Typography
const { TextArea } = Input

interface IProps {
  children?: ReactNode
}

const IssueFrom = () => {
  const options: SelectProps['options'] = []

  for (let i = 10; i < 30; i++) {
    options.push({
      label: i.toString(20) + i,
      value: i.toString(20) + i
    })
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`)
  }

  const [name, setName] = useState('')
  const [items, setItems] = useState(['jack', 'lucy'])
  const inputRef = useRef<InputRef>(null)
  let index = 0

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault()
    setItems([...items, name || `New item ${index++}`])
    setName('')
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }
  return (
    <IssueFormWrapper>
      <Title level={4}>发布文章</Title>
      <Divider />
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item label="分类" required>
          <Select
            mode="multiple"
            allowClear
            placeholder="文章分类"
            onChange={handleChange}
            dropdownRender={(originNode) => {
              return (
                <>
                  {originNode}
                  <Divider style={{ margin: '8px 0' }} />
                  <Space style={{ padding: '0 8px 4px' }}>
                    <Input
                      placeholder="新增分类"
                      ref={inputRef}
                      value={name}
                      onChange={onNameChange}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addItem}
                    >
                      新增
                    </Button>
                  </Space>
                </>
              )
            }}
            options={options}
          />
        </Form.Item>
        <Form.Item label="文章封面">
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="文章摘要" required>
          <TextArea rows={4} maxLength={100} />
        </Form.Item>
      </Form>
      <Divider />
      <Flex justify="flex-end" gap="large">
        <Button>取消</Button>
        <Button type="primary">确定并发布</Button>
      </Flex>
    </IssueFormWrapper>
  )
}

const ArticleIssue: FC<IProps> = () => {
  const [mdValue, setMdValue] = useState('')

  return (
    <ArticleIssueWrapper>
      <Flex className="operationBox" align="center">
        <Input placeholder="请输入文章标题..." size="large"></Input>
        <Popover content={IssueFrom} trigger="click" placement="bottomRight">
          <Button icon={<PlusCircleOutlined />} type="primary">
            发布
          </Button>
        </Popover>
      </Flex>
      <MdEditor
        className="mdEditorBox"
        editorId="articleIssueMdEditor"
        mdValue={mdValue}
        setMdValue={setMdValue}
      />
    </ArticleIssueWrapper>
  )
}

ArticleIssue.displayName = 'ArticleIssue'

export default memo(ArticleIssue)
