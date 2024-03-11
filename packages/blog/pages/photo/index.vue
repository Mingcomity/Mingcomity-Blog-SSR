<template>
  <div class="photo">
    <div class="head">
      <div class="result">合计：{{ 100 }} 张</div>
      <div class="control">
        <div class="territoryCtry">
          <ClientOnly>
            <span class="text">拍摄地点：</span>
            <el-cascader class="cascader" :options="options" clearable />
          </ClientOnly>
        </div>
        <div class="sortCtrl">
          <SortSelect :options="sortOptions" :default-value="'1'" />
        </div>
      </div>
    </div>
    <div ref="imgLayout" class="imgLayout" style="width: 100%"></div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'photo-layout'
})
const sortOptions = [
  {
    value: '1',
    label: '发布时间'
  },
  {
    value: '2',
    label: '浏览量'
  },
  {
    value: '3',
    label: '点赞数'
  }
]
const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          },
          {
            value: 'feedback',
            label: 'Feedback'
          },
          {
            value: 'efficiency',
            label: 'Efficiency'
          },
          {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation'
          },
          {
            value: 'top nav',
            label: 'Top Navigation'
          }
        ]
      }
    ]
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout'
          },
          {
            value: 'color',
            label: 'Color'
          },
          {
            value: 'typography',
            label: 'Typography'
          },
          {
            value: 'icon',
            label: 'Icon'
          },
          {
            value: 'button',
            label: 'Button'
          }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio'
          },
          {
            value: 'checkbox',
            label: 'Checkbox'
          },
          {
            value: 'input',
            label: 'Input'
          },
          {
            value: 'input-number',
            label: 'InputNumber'
          },
          {
            value: 'select',
            label: 'Select'
          },
          {
            value: 'cascader',
            label: 'Cascader'
          },
          {
            value: 'switch',
            label: 'Switch'
          },
          {
            value: 'slider',
            label: 'Slider'
          },
          {
            value: 'time-picker',
            label: 'TimePicker'
          },
          {
            value: 'date-picker',
            label: 'DatePicker'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker'
          },
          {
            value: 'upload',
            label: 'Upload'
          },
          {
            value: 'rate',
            label: 'Rate'
          },
          {
            value: 'form',
            label: 'Form'
          }
        ]
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table'
          },
          {
            value: 'tag',
            label: 'Tag'
          },
          {
            value: 'progress',
            label: 'Progress'
          },
          {
            value: 'tree',
            label: 'Tree'
          },
          {
            value: 'pagination',
            label: 'Pagination'
          },
          {
            value: 'badge',
            label: 'Badge'
          }
        ]
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert'
          },
          {
            value: 'loading',
            label: 'Loading'
          },
          {
            value: 'message',
            label: 'Message'
          },
          {
            value: 'message-box',
            label: 'MessageBox'
          },
          {
            value: 'notification',
            label: 'Notification'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu'
          },
          {
            value: 'tabs',
            label: 'Tabs'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb'
          },
          {
            value: 'dropdown',
            label: 'Dropdown'
          },
          {
            value: 'steps',
            label: 'Steps'
          }
        ]
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog'
          },
          {
            value: 'tooltip',
            label: 'Tooltip'
          },
          {
            value: 'popover',
            label: 'Popover'
          },
          {
            value: 'card',
            label: 'Card'
          },
          {
            value: 'carousel',
            label: 'Carousel'
          },
          {
            value: 'collapse',
            label: 'Collapse'
          }
        ]
      }
    ]
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components'
      },
      {
        value: 'sketch',
        label: 'Sketch Templates'
      },
      {
        value: 'docs',
        label: 'Design Documentation'
      }
    ]
  }
]
const imgLayout = ref<HTMLDivElement>()
const getImgUrls = (lineHeight: number, imgNum: number) => {
  const colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  const urlList = []
  for (let i = 0; i < imgNum; i++) {
    // 随机width、 height、bgcolor.textcolor
    const imgWidth = Math.floor(Math.random() * 1000 + 250)
    const imgHeight = Math.floor(Math.random() * 1000 + 200)
    let bgColor = ''
    let textColor = ''
    for (let j = 0; j < 6; j++) {
      const color1 = Math.floor(Math.random() * 16)
      const color2 = Math.floor(Math.random() * 16)
      bgColor += colorArr[color1]
      textColor += colorArr[color2]
    }
    // 生成图片链接
    const url = `http://via.placeholder.com/${imgWidth}x${imgHeight}/${bgColor}/${textColor}`
    urlList.push(url)
  }
  getImgInfo(urlList, lineHeight, imgNum)
}
const getImgInfo = (urlList: string[], lineHeight: number, imgNum: number) => {
  for (let i = 0; i < imgNum; i++) {
    const newImg = new Image()
    newImg.src = urlList[i]
    newImg.onload = function () {
      const ratio = newImg.width / newImg.height
      // 渲染图片队列
      renderImg(
        {
          target: this,
          ratio,
          height: lineHeight, // 将高度初步调整成设定的行容器高度
          width: lineHeight * ratio // 宽度设置为等比例缩放后的宽度
        },
        lineHeight
      )
    }
  }
}
let imgBoxArrRef: any[] = []
const renderImg = (imgInfo: any, lineHeight: number) => {
  // 获取父容器宽度,精确的
  const width = imgLayout.value!.getBoundingClientRect().width
  let wholeWidth = 0
  imgBoxArrRef.push(imgInfo)
  // 往行容器里塞图片信息
  for (let i = 0; i < imgBoxArrRef.length; i++) {
    wholeWidth += imgBoxArrRef[i].width
  }
  if (wholeWidth > width) {
    // 硬塞进当前行后，需调整至的行容器高度
    const newHeight1 = (lineHeight * width) / wholeWidth
    // 放下一行后，需调整至的行容器高度
    const newHeight2 =
      (lineHeight * width) / (wholeWidth - imgBoxArrRef[imgBoxArrRef.length - 1].width)
    let lastImg = null
    // 如果最后一张图片放下一行后行高更接近初始值，则弹出行容器中最后一张图片
    if (Math.abs(lineHeight - newHeight1) > Math.abs(lineHeight - newHeight2)) {
      lastImg = imgBoxArrRef.pop()
      wholeWidth -= lastImg.width
    }
    const newHeight = (lineHeight * width) / wholeWidth
    // 放置图片位置
    layout(newHeight, imgBoxArrRef)
    // 初始化下一行行容器
    imgBoxArrRef = lastImg ? [lastImg] : []
  }
}
const layout = (newHeight: number, imgArr: any[]) => {
  const imgRow = document.createElement('div')
  for (let i = 0; i < imgArr.length; i++) {
    const img = imgArr[i].target
    img.style.height = `${newHeight}px`
    // 将重新调整大小的图片放行容器里
    imgRow.appendChild(img)
  }
  // 行容器的图片append到父容器节点上
  imgLayout.value?.appendChild(imgRow)
}
onMounted(() => {
  getImgUrls(300, 50)
})
</script>
<style lang="scss" scoped>
.photo {
  .head {
    @include flex-center-between();
    position: sticky;
    top: 0;
    padding: 1.6rem 1rem;
    box-shadow: 0 5px 20px 0 $shadowBlackColor;
    background-color: $bgWhiteColor;
    .result {
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 2px;
      color: $fontGrayColor;
    }
    .control {
      @include flex-center();
      .territoryCtry {
        @include flex-center();
        margin-right: 2.4rem;
        .text {
          color: $fontShallowGrayColor;
          letter-spacing: 2px;
          font-size: 1.4rem;
          font-weight: 600;
        }
        :deep(.el-input__inner) {
          width: 18rem;
          color: $fontBlackColor;
          font-weight: 600;
        }
      }
    }
  }
  .imgLayout {
  }
}
</style>
