<script lang="ts">
  import AppBar from "../components/app-bar/src/AppBar.svelte";
  import Accordion from "../components/accordion/src/Accordion.svelte";
  import BottomBar from "../components/bottom-bar/src/BottomBar.svelte";
  import BottomSheet from "../components/bottom-sheet/src/BottomSheet.svelte";
  import Button from "../components/button/src/Button.svelte";
  import Carousel from "../components/carousel/src/Carousel.svelte";
  import DatePicker from "../components/date-picker/src/DatePicker.svelte";
  import Header from "../components/header/src/Header.svelte";
  import Dock from "../components/dock/src/Dock.svelte";
  import Menu from "../components/menu/src/Menu.svelte";
  import Dropdown from "../components/dropdown/src/Dropdown.svelte";
  import Icon from "../components/icon/src/Icon.svelte";
  import Label from "../components/label/src/Label.svelte";
  import Loader from "../components/loader/src/Loader.svelte";
  import * as Snackbar from "../components/snackbar/src";
  import Row from "../components/row/src/Row.svelte";
  import Column from "../components/column/src/Column.svelte";
  import Search from "../components/search/src/Search.svelte";
  import Table from "../components/table/src/Table.svelte";
  import Tooltip, { tooltip } from "../components/tooltip/src";
  import Tag from "../components/tag/src/Tag.svelte";
  import Textarea from "../components/textarea/src/Textarea.svelte";
  import Upload from "../components/upload/src/Upload.svelte";
  import Stepper from "../components/stepper/src/Stepper.svelte";
  import ComponentDetail from "./components/ComponentDetail.svelte";
  import Switch from "../components/switch/src/Switch.svelte";
  import Card from "../components/card/src/Card.svelte";
  import Input from "../components/input/src/Input.svelte";
  import InputNumber from "../components/input-number/src/InputNumber.svelte";
  import Poster from "../components/poster/src/Poster.svelte";
  import Responsive from "../components/responsive/src/Responsive.svelte";
  import Ellipsis from "../components/ellipsis/src/Ellipsis.svelte";
  import Link from "../components/link/src/Link.svelte";
  import Select from "../components/select/src/Select.svelte";
  import Online from "./components/Online.svelte";
  import Logo from "./components/Logo.svelte";
  import BottomModal from "../components/bottom-modal/src/BottomModal.svelte";
  import Tab from "../components/tab/src/Tab.svelte";
  import ShowMore from "../components/show-more/src/ShowMore.svelte";
  import Checkbox from "../components/checkbox/src/Checkbox.svelte";
  import Badge from "../components/badge/src/Badge.svelte";
  import Quantity from "../components/quantity/src/Quantity.svelte";
  import type { SvelteComponent } from "svelte";

  console.log(Snackbar);

  let loading = true;
  setTimeout(() => {
    // loading = false;
  }, 1500);

  const wrapComponent = (
    Component: any,
    props: Record<string, any> = {},
    events: Record<string, Function> = {}
  ): ((_: Record<string, any>) => SvelteComponent) => {
    return function (opts: Record<string, any>) {
      opts.props || (opts.props = {});
      Object.assign(opts.props, props);
      const comp = new Component(opts);
      Object.entries(events).every(([event, cb]) => {
        comp.$on(event, cb);
      });
      return comp;
    };
  };

  const displayMessage = () => {
    // message.open();
  };

  const uploadUrl = `https://api.imgbb.com/1/upload?expiration=600&key=1ee88e36c9774d863a1d133669f3f4d6`;
  const columns = [
    {
      label: "Name",
      width: "150px",
      key: "name",
    },
    {
      label: "Email",
      key: "email",
      value: (v: Record<string, any>) => (v ? v : "-"),
    },
    {
      label: "Amount",
      align: "right",
      value: ({ amount }: Record<string, any>) =>
        `RM ${(amount || 0).toFixed(2)}`,
    },
    {
      label: "Offline",
      align: "center",
      component: ({ online }: Record<string, any>) =>
        wrapComponent(Online, { online }),
    },
    { label: "Age", align: "center", key: "age" },
    { label: "Created", key: "created" },
    // {
    //   align: "center",
    //   component: (v) =>
    //     wrapComponent(
    //       Icon,
    //       { type: "more" },
    //       {
    //         click() {
    //           console.log("click data =>", v);
    //         },
    //       }
    //     ),
    // },
  ];

  const datas = [
    {
      key: "1",
      name:
        "John Doe (7C29D63E49B7AB3D7C249EF995C30FF37DB7883EA89E93A5F8FCFCCA8FC35CC7)",
      age: 19,
      online: false,
      amount: 10.5,
      created: "2020 Jan 01",
    },
    {
      key: "2",
      name: "Willie",
      email: "willie@hotmail.com",
      age: 24,
      online: false,
      amount: 3.38,
      created: "2020 Feb 27",
    },
    {
      key: "3",
      name: "The Joker",
      age: 16,
      online: true,
      amount: 1020.6,
      created: "2006 Oct 1",
    },
    {
      key: "4",
      name: "Batman",
      age: 30,
      online: false,
      amount: 1.445,
      created: "2006 Oct 1",
    },
    {
      key: "5",
      name: "The Joker",
      age: 16,
      online: true,
      amount: 45.78,
      created: "2006 Oct 1",
    },
  ];

  const uploadSuccessful = ({ detail }: CustomEvent) => {
    console.log(detail.response);
    console.log(detail);
  };

  let disabledButton = false;
  let showModal = false;
  let showBottomSheet = false;
  const defaultItems = ["John Doe", "Testing", "tester", "unittest"];
  let items = defaultItems.slice();

  let searchLoading = false;
  const onSearch = ({ detail }: CustomEvent<string>) => {
    const regexp = new RegExp(detail, "i");
    items = defaultItems.filter((v) => regexp.test(v));
    searchLoading = false;
  };

  const showNotification = (variant: string) => () => {
    Snackbar.show({
      text: "testing",
    });
    // success({
    //   label: "Apple can get away with this because they’re well, Apple.",
    //   description:
    //     "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   duration: 0,
    //   placement: "top-right",
    // });
  };

  // const items = [
  //   { label: "Dashboard", icon: "stat" },
  //   { label: "Reporting", icon: "receipt" },
  //   {
  //     label: "Long label here, lorem ipsum etc....",
  //     href: "https://www.google.com",
  //     align: "center",
  //   },
  //   {
  //     label: "Long label here, lorem ipsum etc....",
  //     submenus: [{ label: "C.B" }, { label: "C.C" }],
  //   },
  // ];

  const options = [
    {
      label: "CC",
      value: "cc",
      onClick: () => {
        console.log("clicked!!!!");
      },
    },
    { label: "Option A", value: "a", disabled: true },
    { label: "Z", value: "z" },
    { divider: true },
    { label: "Option B", value: "b", href: "#B" },
    { label: "Option C", value: "c" },
    { label: "Option D", value: "d" },
    { label: "Option E", value: "e" },
    { label: "Option F", value: "f" },
    { label: "Option G", value: "g" },
  ];

  let step = 0;
  const uploadProps = {
    name: "image",
    url: "https://api.imgur.com/3/upload",
    method: "post",
    headers: {
      Authorization: "Client-ID a70383e65634c6d",
    },
  };

  const accordionItems = [
    {
      label: "label 1",
      collapsed: false,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!",
    },
    {
      label: "label 2",
      disabled: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. B, in!",
    },
    {
      label: "Component",
      content: wrapComponent(Online, { online: false }),
    },
  ];

  const tabItems = [
    {
      label: "Item A",
      options: [
        {
          label: "Item A - First Option",
          icon: wrapComponent(Logo, {}),
          value: "a1",
        },
        {
          label: "Item A - Second Option",
          value: "a2",
          disabled: true,
        },
        {
          label: "Item A - Third Option",
          icon: wrapComponent(Logo, {}),
          value: "a3",
        },
        {
          label:
            "Item A - Fi  asjdosad;laksd;kas; sadasdfthaaaaaaà230129839218hsajkhdkasjd Option",
          value: "a13",
          nowrap: true,
        },
        {
          label: "Item A - Fourth Option",
          value: "a4",
        },
        {
          label: "Item A - Fifth Option",
          value: "a5",
        },
        {
          label: "Item A - Fifth Option",
          value: "a6",
        },
        {
          label: "Item A - Fifth Option",
          value: "a7",
        },
        {
          label: "Item A - Fifth Option",
          value: "a8",
        },
        {
          label: "Item A - Fifth Option",
          value: "a9",
        },
        {
          label: "Item A - Fifth Option",
          value: "a10",
        },
        {
          label: "Item A - Fifth Option",
          value: "a11",
        },
        {
          label: "Item A - Fifth Option",
          value: "a12",
        },

        {
          label: "Item A - Fifth Option",
          value: "a14",
        },
      ],
    },
    {
      label: "Item B",
      options: [
        {
          label: "Item B - First Option",
          icon: wrapComponent(Logo, {}),
          value: "b1",
        },
        {
          label: "Item B - Second Option",
          value: "b2",
        },
        {
          label: "Item B - Third Option",
          value: "b3",
        },
      ],
    },
    {
      label: "Item C",
      options: [
        {
          label: "Item C - First Option",
          value: "c1",
        },
        {
          label: "Item C - Ten Option",
          value: "c10",
        },
      ],
    },
  ];

  const menus = [
    { key: "item0", label: "Item 0 (Disabled)", disabled: true },
    { key: "item1", label: "Item 1" },
    { key: "item2", label: "Item 2" },
    {
      key: "item99",
      label:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      key: "item3",
      label: "Item 3 (Submenu)",
      submenus: [
        {
          key: "item4",
          label: "Item 4",
        },
      ],
    },
    {
      key: "item5",
      label: "Item 4 Long text here (Submenu)",
      submenus: [
        {
          key: "item6",
          label: "Nested Submenu",
          value: "nested-submenu",
          submenus: [
            {
              key: "item7",
              label: "Nested submenu 1",
              value: "nested-submenu-1",
            },
            {
              key: "item8",
              label:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            },
          ],
        },
      ],
    },
  ];

  const checkboxOptions = [
    {
      label: "Checkbox1",
      value: "value1",
    },
    {
      label: "Checkkbox2",
      value: "value2",
    },
    {
      label: "Checkkbox3",
      value: "value3",
      disabled: true,
    },
  ];

  const handleSelectMenu = ({ detail }: CustomEvent): void => {
    console.log(detail);
  };

  const onConfirm = ({ detail }: CustomEvent<string>) => {
    console.log(detail);
  };

  const onClick = (e: Event) => {
    console.log("clicked", e);
  };

  const onChange = () => {
    // console.log((<HTMLSelectElement>e.currentTarget).value);
  };

  const onCheckboxChanged = (e: CustomEvent<{ value: any[] }>) => {
    console.log(e.detail.value);
  };

  let openLeftDock = false;
  let openRightDock = false;
</script>

<AppBar title={`xxx`} hasBg={true} />

<Responsive let:aspectRatio let:innerWidth let:orientation>
  <div style={`width:100%; display:flex; justify-content:center;`}>
    <Carousel
      items={[
        {
          src: "https://asset.wetix.my/images/1tOzB9WuHEsqNXEAMRj7Hzqn8q0.jpg",
          url: "https://google.com",
        },
        {
          src: "https://asset.wetix.my/images/marathon.png",
          url: "https://google.com",
        },
        {
          src:
            "https://asset.wetix.my/images/af910e1d-9112-4fec-b4b5-3671c1b4c87b.jpg",
          url: "https://google.com",
        },
        {
          src:
            "https://asset.wetix.my/images/39131d05-37d9-4902-948b-183e24a8a2ae.jpeg",
          url: "https://google.com",
        },
        {
          src:
            "https://asset.wetix.my/images/da132468-8677-4675-b8f5-c32f9a751f3a.png",
          url: "https://google.com",
        },
        {
          src:
            "https://asset.wetix.my/images/02a86a0b-ac84-4df1-ba71-d707045815e6.png",
          url: "https://google.com",
        },
      ]}
      heightRatio={0.55}
      gap={10}
      leftAndRight={innerWidth > 640 ? 30 : 20}
      perPage={innerWidth > 640 ? 3 : 1}
      style="width:90%;"
      autoPlay={true}
    />
  </div>
</Responsive>

<Responsive let:aspectRatio let:innerWidth let:orientation>
  <div style={`margin:10px`}>
    <p>{`aspectRatio: ${aspectRatio}`}</p>
    <p>{`innerWidth: ${innerWidth}`}</p>
    <p>{`orientation: ${orientation}`}</p>
  </div>
</Responsive>

<main>
  <Badge count={1}>testing</Badge>
  <Badge count={0}>testing</Badge>
  <Badge count={90}>testing</Badge>
  <Badge count={100}>testing</Badge>

  <!-- <Badge count={100} /><Badge count={98} /> -->
  <ComponentDetail hint="@responsive-ui/header" block={true}>
    <Tooltip trigger={["click"]} text="Responsive UI">
      <Header label="Responsive UI" />
    </Tooltip>
  </ComponentDetail>
  <ComponentDetail hint="@responsive-ui/menu">
    <div style="width: 240px;">
      <Menu items={menus} on:change={handleSelectMenu} />
    </div>
  </ComponentDetail>
  <div>
    <ComponentDetail hint="@responsive-ui/label">
      <Label label="Text" />
    </ComponentDetail>
    <ComponentDetail hint="@responsive-ui/input">
      <Input style="width: 240px;" placeholder="Enter your text..." />
    </ComponentDetail>
    <Checkbox>testing</Checkbox>
    <Checkbox disabled label="Hello world" />
    <ComponentDetail hint="@responsive-ui/input-number">
      <InputNumber min={0} format={(v) => `${v}%`} />
    </ComponentDetail>
  </div>
  <Dock bind:open={openRightDock} placement="right" />
  <div class="padding" style="width: 60%; margin: 0 auto; text-align: center">
    <Row>
      <Column span={8}>
        <span
          title="Hover me for Tooltip"
          use:tooltip={{ placement: "top-left" }}
          >Hover me for Tooltip on topLeft</span
        >
      </Column>
      <Column span={8}>
        <span title="Hover me for Tooltip" use:tooltip={{ placement: "top" }}
          >Hover me for Tooltip on top</span
        >
      </Column>
      <Column span={8}>
        <span
          title="Hover me for Tooltip"
          use:tooltip={{ placement: "top-right" }}
          >Hover me for Tooltip on topRight</span
        >
      </Column>
    </Row>
    <Row>
      <Column span={8}>
        <span title="Hover me for Tooltip" use:tooltip={{ placement: "left" }}
          >Hover me for Tooltip on left</span
        >
      </Column>
      <Column span={8}>
        <span title="Hover me for Tooltip">Hover me for Tooltip on auto</span>
      </Column>
      <Column span={8}>
        <span title="Hover me for Tooltip" use:tooltip={{ placement: "right" }}
          >Hover me for Tooltip on right</span
        >
      </Column>
    </Row>
    <Row>
      <Column span={8}>
        <span
          title="Hover me for Tooltip"
          use:tooltip={{ placement: "bottom-left" }}
          >Hover me for Tooltip on bottomLeft</span
        >
      </Column>
      <Column span={8}>
        <span title="Hover me for Tooltip" use:tooltip={{ placement: "bottom" }}
          >Hover me for Tooltip on bottom</span
        >
      </Column>
      <Column span={8}>
        <span
          title="Hover me for Tooltip"
          use:tooltip={{ placement: "bottom-right" }}
          >Hover me for Tooltip on bottomRight</span
        >
      </Column>
      <Column span={8}>
        <span
          title="Click me for Tooltip"
          use:tooltip={{ placement: "bottom-right", trigger: ["click"] }}
          >Click me for Tooltip on bottomRight</span
        >
      </Column>
    </Row>
  </div>

  <!-- <div class="padding" style="text-align: center">
    <span
      label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      use:tooltip>Lorem ipsum</span
    >
  </div> -->

  <!-- <div class="padding" style="text-align: center">
    <span label="Lorem Ipsum!" use:tooltip
      >Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.</span
    >
  </div> -->
  <Dock bind:open={openLeftDock} />
  <!--
    <Header label="Responsive UI">
      <div>
        <Icon type="filter" on:click={() => (showBottomSheet = true)} />
        <Icon type="right-arrow" on:click={() => (showModal = true)} />
      </div>
    </Header>
  </ComponentDetail> -->

  <ComponentDetail hint="@responsive-ui/accordion" block={true}>
    <Accordion items={accordionItems} multiple={true} />
    <Accordion items={accordionItems} />
    <Accordion items={accordionItems}>
      <div slot="item" let:index>{index}</div>
    </Accordion>
  </ComponentDetail>
  <ComponentDetail hint="@responsive-ui/stepper" block={true}>
    <Stepper
      current={step}
      on:change={(e) => console.log(e.detail)}
      items={[
        { label: "Step 1", description: "testing .asdasd" },
        { label: "Step 2" },
      ]}
    />
  </ComponentDetail>
  <div>
    <button disabled={step <= 0} on:click={() => (step -= 1)}>previous</button>
    <button disabled={step > 1} on:click={() => (step += 1)}>next</button>
    <button on:click={() => (openLeftDock = true)}>open left dock</button>
    <button on:click={() => (openRightDock = true)}>open right dock</button>
  </div>

  <Select
    multiple={true}
    size={5}
    value={["e"]}
    on:change={console.log}
    options={[
      { label: "CC", value: "cc" },
      { label: "Option A", value: "a", disabled: true },
      { label: "Z", value: "z" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" },
      { label: "Option D", value: "d" },
      { label: "Option E", value: "e" },
      { label: "Option F", value: "f" },
      { label: "Option G", value: "g" },
    ]}
  />
  <Select
    multiple={true}
    size={5}
    value={["b", "c"]}
    options={[
      { label: "CC", value: "cc" },
      { label: "Option A", value: "a", disabled: true },
      { label: "Z", value: "z" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" },
      { label: "Option D", value: "d" },
      { label: "Option E", value: "e" },
      { label: "Option F", value: "f" },
      { label: "Option G", value: "g" },
    ]}
  />

  <ComponentDetail hint="@responsive-ui/select">
    <Select
      value="c"
      options={[
        { label: "Option A", value: "a" },
        { label: "Option B", value: "b" },
        { label: "Option C", value: "c" },
        { label: "Option D", value: "d" },
      ]}
      on:change={onChange}
    />
    <Select
      multiple={true}
      size={5}
      value={["b", "c"]}
      options={[
        { label: "CC", value: "cc" },
        { label: "Option A", value: "a", disabled: true },
        { label: "Z", value: "z" },
        { label: "Option B", value: "b" },
        { label: "Option C", value: "c" },
        { label: "Option D", value: "d" },
        { label: "Option E", value: "e" },
        { label: "Option F", value: "f" },
        { label: "Option G", value: "g" },
      ]}
    />
  </ComponentDetail>

  <ComponentDetail hint="@responsive-ui/loader">
    <Loader size="small" />
  </ComponentDetail>

  <ComponentDetail hint="@responsive-ui/textarea" block={true}>
    <Textarea placeholder="Key in your input here..." />
  </ComponentDetail>
  <ComponentDetail hint="@responsive-ui/tab" block={true}>
    <Tab items={tabItems} selected={1} />
  </ComponentDetail>
  <ComponentDetail hint="@responsive-ui/poster">
    <Poster
      src="data:image/png;base64,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"
    />
  </ComponentDetail>
  <ComponentDetail hint="@responsive-ui/ellipsis" block={true}>
    <Ellipsis>
      Lorem Ipsum is simply <Tooltip text="hello world"
        ><Link on:click={console.log}>dummy text</Link></Tooltip
      > of the printing and typesetting industry.
      <Link href="https://google.com">Lorem Ipsum</Link>
      has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.
    </Ellipsis>
  </ComponentDetail>
  <ComponentDetail hint="@responsive-ui/show-more" block={true}>
    <ShowMore>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
      et Malorum" by Cicero are also reproduced in their exact original form, accompanied
      by English versions from the 1914 translation by H. Rackham.
    </ShowMore>
  </ComponentDetail>

  <ComponentDetail hint="@responsive-ui/card">
    <Card>Content here</Card>
  </ComponentDetail>

  <Responsive let:aspectRatio>
    {#if aspectRatio > 1}
      <ComponentDetail hint="@responsive-ui/table" block={true}>
        <Table key="key" {columns} items={datas} />
      </ComponentDetail>
    {:else}
      {#each datas as data}
        <Card>
          <div>Name : {data.name}</div>
          <div>Created : {data.created}</div>
        </Card>
      {/each}
    {/if}
  </Responsive>

  <ComponentDetail hint="@responsive-ui/tag">
    <Tag value="Blue" closable={true} />
    <Tag color="red" value="Red" />
    <Tag color="yellow" value="Yellow" />
    <Tag color="orange" value="Orange" />
    <Tag color="green" value="Green" />
    <Tag color="grey" value="Grey" />
  </ComponentDetail>

  <ComponentDetail hint="@responsive-ui/search" block={true}>
    <Search
      on:search={onSearch}
      bind:loading={searchLoading}
      placeholder="Enter your keyword here to search..."
    />

    {#each items as item, i}
      <div>{i + 1}. {item}</div>
    {/each}
  </ComponentDetail>
  <div style="width: 240px; border: 2px solid red;">
    <Menu items={menus} on:click={handleSelectMenu} />
  </div>
  <Quantity />
  <Dropdown trigger="click" items={options}>
    <Button>Click Trigger Dropdown</Button>
  </Dropdown>
  <Dropdown trigger="hover" items={options}>
    <Button>Hover Trigger Dropdown</Button>
  </Dropdown>
  <Dropdown trigger="contextmenu" items={options}>
    <div style="width: 300px; height: 200px; background: #e5e7eb">
      Context Trigger Dropdown
    </div>
  </Dropdown>

  <Card>
    <Row>
      <Column span={{ sm: 6, xs: 10 }}>Upload</Column>
      <Column span={{ sm: 18 }}>
        <Upload
          name="image"
          url={uploadUrl}
          withCredentials={false}
          on:success={uploadSuccessful}
        />
      </Column>
    </Row>
    <Row alignItems="center">
      <Column span={{ sm: 6, xs: 10 }}>Date Picker</Column>
      <Column span={{ sm: 18 }}>
        <DatePicker />
      </Column>
    </Row>
    <Row>
      <Column span={{ sm: 6, xs: 10 }}>Disabled Button</Column>
      <Column span={{ sm: 18 }}>
        <Switch bind:checked={disabledButton} />
      </Column>
    </Row>
  </Card>

  <Label label="Number">
    <InputNumber format={(v) => `${v}%`} />
  </Label>

  <Icon type="more" />
  <Icon type="right-arrow" />
  <Icon type="x" />
  <Icon type="filter" />
  <!-- <Tooltip placeholder="Testing here">
    <p>testing here</p>
  </Tooltip>
  <Tooltip
    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book."
  >
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </Tooltip> -->
  <!--
  <div>
    <Button on:click={displayMessage}>Display message</Button>
  </div>
  <Button on:click={showNotification("success")}>Show Success</Button>
  <Button on:click={showNotification("error")}>Show Error</Button>
  <DatePicker /> -->
  <BottomBar>
    <ComponentDetail hint="@responsive-ui/button" block={true}>
      <Button disabled={disabledButton} on:click={showNotification("default")}>
        CONFIRM
      </Button>
    </ComponentDetail>
  </BottomBar>
</main>

<!-- <FloatingActionButton on:click={console.log} /> -->

<BottomModal bind:open={showModal} closable={true}>
  <div style="padding: 30px 15px;">
    <!-- <DatePicker /> -->
  </div>
</BottomModal>
<!-- <BottomModal bind:open={showModal}>
  <Row style="padding:10px;" justifyContent="space-between">
    <span style="width: 48%">
      <Button outline={true}>CANCEL</Button>
    </span>
    <span style="width: 48%">
      <Button on:click={onClick}>OK</Button>
    </span>
  </Row>
</BottomModal>
/> -->
<BottomSheet
  items={tabItems}
  bind:open={showBottomSheet}
  on:filter={onConfirm}
  on:change={console.log}
/>

<!-- <BottomSheet label="Testing" bind:open={showModal} items={tabItems} /> -->

<!-- <Snackbar.default text={`testing\nJello wordl`} /> -->
<style>
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

  :root {
    --padding-sm: 0.7rem;
    --padding: 1rem;
    --font-size-lg: 20px;
  }
  :global(body) {
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: #fff;
    font-size: 14px;
    padding: 0;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    /* text-align: center; */
    padding: 30px 15px;
    /* flex-grow: 1; */
    /* max-width: 240px; */
    margin: 0 auto;
    width: 100%;
  }

  .padding {
    padding: 10px 0;
  }

  :global(span[label], span[data-tooltip]) {
    background: #f5f5f5;
  }
</style>
