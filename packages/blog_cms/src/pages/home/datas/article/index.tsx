import {
  TimeRangePickerProps,
  DatePicker,
  Space,
  Select,
  SelectProps,
  Divider,
  Button,
  Input,
  InputRef,
  Flex,
  Typography
} from 'antd'
import { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DatasArticleWrapper } from '@/styles/home/datas/article'
import {
  PlusCircleOutlined,
  PlusOutlined,
  SearchOutlined
} from '@ant-design/icons'
import Link from 'next/link'

const { RangePicker } = DatePicker
const { Title, Text } = Typography
interface IProps {
  children?: ReactNode
}

const rangePresets: TimeRangePickerProps['presets'] = [
  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] }
]
const onRangeChange = (
  dates: null | (Dayjs | null)[],
  dateStrings: string[]
) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1])
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
  } else {
    console.log('Clear')
  }
}

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
let index = 0
const PageArticle: FC<IProps> = () => {
  const [items, setItems] = useState(['jack', 'lucy'])
  const [name, setName] = useState('')
  const inputRef = useRef<InputRef>(null)

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
    <DatasArticleWrapper>
      <Flex className="filterBox">
        <Space style={{ width: '100%' }} size="middle">
          <Select
            placeholder="是否可见"
            defaultValue={['可见']}
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: '可见', label: '可见' },
              { value: '不可见', label: '不可见' }
            ]}
          />
          <RangePicker presets={rangePresets} onChange={onRangeChange} />
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
          <Input placeholder="请输入标题关键词" allowClear />
          <Button type="primary" ghost icon={<SearchOutlined />}>
            搜索
          </Button>
        </Space>
        <Link href="/home/datas/article/issue" target="_blank">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            发布
          </Button>
        </Link>
      </Flex>
      <Flex className="articleListBox" vertical>
        <div className="item">
          <Flex className="topContent" justify="space-between" align="center">
            <Link href={''}>
              <Title level={4} ellipsis={{ rows: 1 }}>
                小程序技术全解|青训营笔记
              </Title>
            </Link>
            <Text type="secondary">2022-08-23 23:54</Text>
          </Flex>
          <Flex className="topContent" justify="space-between" align="center">
            <Space size="small" split={'·'}>
              <Text type="secondary">{1022}阅读</Text>
              <Text type="secondary">{20}点赞</Text>
              <Text type="secondary">{1}评论</Text>
            </Space>
            <Space size="large">
              <Link href={''}>编辑</Link>
              <Link href={''}>浏览</Link>
              <Text>设为不可见</Text>
            </Space>
          </Flex>
        </div>
        <div className="item">
          <Flex className="topContent" justify="space-between" align="center">
            <Link href={''}>
              <Title level={4} ellipsis={{ rows: 1 }}>
                小程序技术全解|青训营笔记
              </Title>
            </Link>
            <Text type="secondary">2022-08-23 23:54</Text>
          </Flex>
          <Flex className="topContent" justify="space-between" align="center">
            <Space size="small" split={'·'}>
              <Text type="secondary">{1022}阅读</Text>
              <Text type="secondary">{20}点赞</Text>
              <Text type="secondary">{1}评论</Text>
            </Space>
            <Space size="large">
              <Link href={''}>编辑</Link>
              <Link href={''}>浏览</Link>
              <Text>设为不可见</Text>
            </Space>
          </Flex>
        </div>
        <div className="item">
          <Flex className="topContent" justify="space-between" align="center">
            <Link href={''}>
              <Title level={4} ellipsis={{ rows: 1 }}>
                小程序技术全解|青训营笔记
              </Title>
            </Link>
            <Text type="secondary">2022-08-23 23:54</Text>
          </Flex>
          <Flex className="topContent" justify="space-between" align="center">
            <Space size="small" split={'·'}>
              <Text type="secondary">{1022}阅读</Text>
              <Text type="secondary">{20}点赞</Text>
              <Text type="secondary">{1}评论</Text>
            </Space>
            <Space size="large">
              <Link href={''}>编辑</Link>
              <Link href={''}>浏览</Link>
              <Text>设为不可见</Text>
            </Space>
          </Flex>
        </div>
      </Flex>
    </DatasArticleWrapper>
  )
}

PageArticle.displayName = 'PageArticle'

export default memo(PageArticle)
