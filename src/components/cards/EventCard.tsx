import { Event } from "@/domains/models/events";
import { Card, Image, Paragraph, Text, YStack } from "tamagui";

export function EventCard({ title, description, imageUrl }: Event) {
  return (
    <Card
      elevate
      animation="bouncy"
      width={150}
      height={150}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      overflow="hidden"
    >
      <Card.Footer padding="$2" backgroundColor="$background05">
        <YStack width="100%">
          <Text numberOfLines={1}>{title}</Text>
          <Paragraph theme="alt2" numberOfLines={1}>
            {description}
          </Paragraph>
        </YStack>
      </Card.Footer>
      <Card.Background backgroundColor="$background05">
        <Image
          source={{
            width: 150,
            height: 150,
            uri: imageUrl,
          }}
          width="100%"
          height="100%"
        />
      </Card.Background>
    </Card>
  );
}
